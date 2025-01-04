import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../img/pd-1.png';
import img2 from '../img/pd-2.jpg';
import img3 from '../img/pd-3.png';
import img4 from '../img/pd-4.png';
import img5 from '../img/pd-5.jpg';
import img6 from '../img/pd-6.jpg';
import img7 from '../img/pd-7.jpg';
import img8 from '../img/pd-8.jpg';
import img9 from '../img/pd-9.jpg';
import img10 from '../img/pd-10.jpg';
import img11 from '../img/pd-11.jpg';
import img12 from '../img/old_monk_1.jpg';
import img13 from '../img/pd-13.jpg';
import img14 from '../img/pd-14.jpg';
import img15 from '../img/pd-15.jpg';
import img16 from '../img/pd-16.jpg';
import img17 from '../img/pd-17.jpg';
import img18 from '../img/pd-18.jpg';
import img19 from '../img/pd-19.jpg';
import img20 from '../img/pd-20.jpg';
import './Productcards.css';
import { Navigationbar } from './Navigationbar';
import { Link } from 'react-router-dom';

function ProductCards() {
  const cardsData = [
    { path: img1, name: 'Cognac', price: 5000 ,pid: 101},
    { path: img2, name: 'Black Label', price: 5500 ,pid: 102},
    { path: img3, name: 'Vintage Sweet Rum', price: 7500 ,pid: 103},
    { path: img4, name: 'Brandy Mochup', price: 4000 ,pid: 104},
    { path: img5, name: 'Colonel Taylor', price: 4500 ,pid: 105},
    { path: img6, name: 'Gentleman Jack', price: 12000 ,pid: 106},
    { path: img7, name: 'Bacardi 151', price: 9200 ,pid: 107},
    { path: img8, name: 'Chivas Regal', price: 8650 ,pid: 108},
    { path: img9, name: 'Carolus', price: 5000 ,pid: 109},
    { path: img10, name: 'Jameson', price: 5500 ,pid: 110},
    { path: img11, name: 'Highland Park', price: 7500 ,pid: 111},
    { path: img12, name: 'Old Monk', price: 400 ,pid: 112},
    { path: img13, name: 'Woodeys Fairly Reliable', price: 4500 ,pid: 113},
    { path: img14, name: 'Stella Artois', price: 12000 ,pid: 114},
    { path: img15, name: 'Havana Club', price: 9200 ,pid: 115},
    { path: img16, name: 'Kentucky', price: 8650 ,pid: 116},
    { path: img17, name: 'Marlin Spike', price: 4500 ,pid: 117},
    { path: img18, name: 'Maker\'s Mark', price: 12000 ,pid: 118},
    { path: img19, name: 'Seventeen', price: 9200 ,pid: 119},
    { path: img20, name: 'Sagamore Spirit', price: 8650 ,pid: 120},
  ];

  return (
    <>
        <Navigationbar></Navigationbar>
    <Container>
      <Row className="container text-center mt-5">
        <h2>Home {'>'} Order Online</h2>
      </Row>
      <Row xs={1} md={4} className="g-3 mt-3">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="custom-card">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + card.path} style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title>
                  <h3>{card.name}</h3>
                  <p>₹{card.price}</p>
                </Card.Title>
                <Link to="/add-to-cart">
                  <Button type='submit' variant="outline-secondary">Buy Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className=" justify content centre mt-5">
        <Button variant="outline-secondary">More Products</Button>
      </Row>
    </Container>
    </>
  );
}

export default ProductCards;
