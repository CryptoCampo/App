import './Stylesheets/Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './ParticleBackground';
// import videoWelcome from '../Resources/videos/VideoWelcome.mp4'
import { Navbar, Nav, Container, NavDropdown, Form, Button, Offcanvas, ListGroup, Card } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import IconMeta from './Layouts/img/metamask.ico';
import IconCoin from './Layouts/img/coinbase.svg';
import IconTrust from './Layouts/img/trust.png';
import Logo from '../Resources/img/logoeste-03.png';

function Welcome() {
    const [show, setShow] = useState(false);
    const closeSidebar = () => setShow(false);
    const showSidebar = () => setShow(true);
    return (
<>
        <div className='row' id='body'>
            {/* <Back id="tsparticles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} /> */}
            <div className='row center mt-2'>
                <div className='col-md-6 justify-content-center'>
                    <div className='logo justify-content-center row'>
                            {/* <h1 className='textA text'>Unimos las<br></br>
                                cryptomonedas<br></br>
                                con el campo.</h1>
                            <p>Inverti de forma simple, segura
                                y transparente.</p> */}
                                <img className='logoCC' src={Logo}></img>
                    </div>
                    <div className='row justify-content-center btnAlign'>
                        <div className='justify-content-center'>
                            <Button variant="outline-success" onClick={showSidebar} className='btnlog btn btn-secondary border-3 me-3'>Ingresar</Button>
                            <Button variant="outline-success" as={Link} to='/Inverti' className='btnInv btn btn-secondary border-3'>Invertí</Button>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-6'>
                    <div className='row justify-content-center p-5 mt-2' id='video'>
                        <video src={videoWelcome} loop='true' width="800" height="600" controls="" autoplay="true" className='media-video' muted='true' />
                    </div>
                </div> */}
            </div>
            {/* <div className='col-md-6'> */}
            {/* <Card className='center card'>
                    <Card.Img variant="top" src={campoImg} width='600px' height='800rem' />
                    <Card.Body>
                        <Card.Title className='cardTitle'>CryptoCampo</Card.Title>
                    </Card.Body>
                </Card> */}
            {/* </div> */}
            
        </div>
        <div>
        <Form className="d-flex">
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
    </div>
    </>
    );
}

export default Welcome;