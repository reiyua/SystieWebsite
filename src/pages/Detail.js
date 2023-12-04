import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemImage } from '../components/ItemImage';
import Button from 'react-bootstrap/Button';

export function Detail(props) {
    const [artworkData, setArtworkData] = useState()

    let { id } = useParams();

    useEffect(() => {
        if (!artworkData) {
            props.handler(id).then((art) => setArtworkData(art))
        }
    }, [id])


    if (artworkData) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-4">{artworkData.artwork_title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ItemImage source={artworkData.artwork_image} />
                    </Col>
                    <Col md={6}>
                        <h2>More information</h2>
                        <h3>Artwork description</h3>
                        <p>{artworkData.summary}</p>
                        <h3>Author</h3>
                        <p>systie</p>
                        
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
    else {
        return null
    }

}