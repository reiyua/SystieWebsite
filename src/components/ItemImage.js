// import modules required
import { useState, useEffect, useContext } from 'react'
import { StorageContext } from '../contexts/StorageContext'
import { ref, getDownloadURL } from 'firebase/storage'
import Card from 'react-bootstrap/Card'

export function ItemImage ( props ) {
  // declare variables
  const [image,setImage] = useState()
  const storage = useContext( StorageContext)

  // useEffect to get image from Google Firebase Storage via the URL given in Google Firebase Firestore
  useEffect( () => {
    if( props.source ) {
      const imgref = ref( storage, `artworks/${props.source}`)
      getDownloadURL( imgref )
      .then( (url) => setImage(url) )
      .catch( err => console.log(err) )
    }
  }, [props.source] )

  // if image cannot be loaded, display a grey box as placeholder
  if(!image) {
    const defstyle={
      backgroundColor: "#cccccc",
      aspectRatio: "4/3"
    }
    return (
      <div style={defstyle}>
      </div>
    )
  }
  else {
    return (
      // if all works out, display the image, title and author of the artwork in the gallery boxes with the correct scaling
      <Card.Img style={{aspectRatio: "3/4"}} variant='top' src={image} />
    )
  }
}