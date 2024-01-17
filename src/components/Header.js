import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export function Header(props) {
  // props.items is the value of nav state in App.js
  // create a collection of navigation items
  const Links = props.items.map((item, itemkey) => {
    return (
      <Nav.Link href={item.link} key={itemkey}> {item.label}  </Nav.Link>
    )
  })
  
  return (
    // create a navigation bar with the collection of navigation items, display as black bar with "ClassName" and variant"
    <Navbar className="mb-3 bg-dark" variant="dark">
      <Container>
        <Navbar.Brand>systie</Navbar.Brand>
        <Nav>
          {Links}
        </Nav>
      </Container>
    </Navbar>
  )
}