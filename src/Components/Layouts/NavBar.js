import '../Stylesheets/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Offcanvas, ListGroup, Card } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import IconMeta from './img/metamask.ico';
import IconCoin from './img/coinbase.svg';
import IconTrust from './img/trust.png';
import IconProfile from './img/iconProfile.png';
import logoHome from './img/logoHome.png'

function NavBarCC() {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);

  return (
    <>
      <Navbar className='navBg' variant='dark' expand="lg">
        <Container fluid>
          <Navbar.Brand className='textNav' as={Link} to='/'><img src={logoHome} width='320px' height='70px'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='http://www.cryptocampo.net' className='textNav'>Nosotros</Nav.Link>
              <Nav.Link as={Link} to='/WhitePapper' className='textNav'>Whitepaper</Nav.Link>
              <Nav.Link as={Link} to='/Inverti' className='textNav'>Inverti</Nav.Link>
              <Nav.Link as={Link} to='/MarketPlace' className='textNav'>Marketplace</Nav.Link>
              <Nav.Link as={Link} to='/DashBoard' className='textNav'>Mis Inversiones</Nav.Link>
              <Nav.Link as={Link} to='/Ayuda' className='textNav'>Ayuda</Nav.Link>
              <img src={IconProfile} width='50px' height='50px'></img>
              <NavDropdown className='textNav' id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Mis Inversiones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Reclamar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success" onClick={showSidebar} className='textNavLogin rounded-pill border-3'>Ingresar</Button>
              <Container className='p-4'>
                <Offcanvas show={show} onHide={closeSidebar} placement='end'>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Wallet</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <p className='p-2 fs-5'>Conecte su wallet para iniciar sesion en CryptoCampo.</p>
                    <div className='p-2 ustify-content-end'>

                      <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                          <ListGroup.Item as={Link} to='/' className='fs-4'><img src={IconMeta} width='35px' height='35px' className='me-2'></img>Metamask</ListGroup.Item>
                          <ListGroup.Item as={Link} to='/' className='fs-4'><img src={IconTrust} width='35px' height='35px' className='me-2'></img>Trust</ListGroup.Item>
                          <ListGroup.Item as={Link} to='/' className='fs-4'><img src={IconCoin} width='35px' height='35px' className='me-2'></img>Coinbase</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </Container>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default NavBarCC;