import './Nav.css'
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Menu = () => {


  return (
    <Container className='wrapper-nav'>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Nav className="justify-content-center nav" activeKey="/home">
            <Nav.Item className='navItem'>
              <Nav.Link href="/home" className='navLink'>Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Nav.Link eventKey="link-1" className='navLink'>Partida aleatoria</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Nav.Link eventKey="link-2" className='navLink'>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item className='navItem'>
              <Nav.Link eventKey="disabled" className='navLink' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>

        </Col>
        <Col></Col>
      </Row>

    </Container>
  );


}
