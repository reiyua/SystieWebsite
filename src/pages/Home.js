import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react"
import { ItemImage } from "../components/ItemImage"

export function Home(props) {
    const [artworks,setArtworks] = useState([])

    useEffect(() => {
      console.log( props.items )
      setArtworks( props.items )
    }, [props.items])
  
  
  
    const ItemCards = artworks.map( ( artwork, itemkey ) => {
      const itemLink = `/detail/${artwork.id}`
      return(
        <Col md={4} className="mb-4" key={itemkey}>
          <Card key={itemkey} className="position-relative">
            <a href={itemLink} className="position-absolute" style={{top:0, left:0, right:0, bottom:0}}>
            </a>
            <ItemImage source={ artwork.cover_image} />
            <Card.Body>
              <Card.Title>{ artwork.artwork_title }</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  
    return (
      <Container>
        <Row>
          {ItemCards}
        </Row>
      </Container>
    )
  }
