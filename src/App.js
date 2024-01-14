// Importing necessary libraries and tools from Gppgle Firebase, React, React Router Dom, React Hooks, React Context API, and CSS
import { FirebaseConfig } from "./config/Config"
import { initializeApp } from "firebase/app"
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  doc
} from "firebase/firestore";
import { getStorage } from "firebase/storage"

// importing components (pages)
import { Header } from "./components/Header"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Detail } from "./pages/Detail";
import { Gallery } from "./pages/Gallery";

// contexts
import { StorageContext } from "./contexts/StorageContext";

// import css
import './App.css'



function App() {
  const FBapp = initializeApp(FirebaseConfig)
  const FBdb = getFirestore(FBapp)
  const FBstorage = getStorage(FBapp)


  // navigation array
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Gallery", link: "/gallery" },
  ]
 

  /// application states
  const [nav, setNav] = useState(navItems)
  const [auth, setAuth] = useState(false)
  const [data, setData] = useState([])
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    if (data.length === 0 && fetching === false) {
      readData()
      setFetching(true)
    }
  }, [data])


  

  const saySomething = (word) => {
    alert(word)
  }

  


  
         
  // function to get data
  const readData = async () => {
    const querySnapshot = await getDocs(collection(FBdb, "artworks"))
    let listdata = []
    querySnapshot.forEach((doc) => {
      let item = doc.data()
      item.id = doc.id
      listdata.push(item)
    })
    setData(listdata)

  }

  // function to get a single item
  const getDocument = async (itemId) => {
    const docRef = doc(FBdb, "artworks", itemId)
    const docSnap = await getDoc(docRef)
    let book = docSnap.data()
    book.id = itemId
    return book
  }


  // modify the navigation on line 101 to new home page (gallery is set for now)
  return (
    <div className="App">
      <Header items={nav} user={auth} />
        <StorageContext.Provider value={FBstorage}>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About greeting="Hey you, this is about page!" handler={saySomething} />} />
            <Route path="/contact" element={<Contact greeting="Hey you, this is contact page!" />} />
            <Route path="/detail/:id" element={<Detail handler={getDocument} />} />
            <Route path="/gallery" element={<Gallery items={data} />} />
          </Routes>
        </StorageContext.Provider>
    </div>
  );
}

export default App;