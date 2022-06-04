import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/Inverti.css';
import { Button, Card } from 'react-bootstrap';
import CampoNFT from '../Resources/img/CampoNftCC.jpg';




function Inverti() {
    return (
        <>
        <div id='bodyInverti' className='d-flex justify-content-center'>
            <div className='row align'>
                <div className='col-md-4 p-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CampoNFT} />
                        <Card.Body>
                            <Card.Title>Small</Card.Title>
                            <Card.Text>
                                Some quick example text.
                            </Card.Text>
                            <input type="number" defaultValue={10} id='numSmall' className='txtCantNft'></input>
                            <Button variant="success" className='btnComprar'>Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CampoNFT} />
                        <Card.Body>
                            <Card.Title>Medium</Card.Title>
                            <Card.Text>
                                Some quick example text.
                            </Card.Text>
                            <input type="number" defaultValue={10} id='numMedium' className='txtCantNft'></input>
                            <Button variant="success" className='btnComprar'>Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-4 p-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CampoNFT} />
                        <Card.Body>
                            <Card.Title>Large</Card.Title>
                            <Card.Text>
                                Some quick example text.
                            </Card.Text>
                            <input type="number" defaultValue={10} id='numLarge' className='txtCantNft'></input>
                            <Button variant="success" className='btnComprar'>Comprar</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </>
    );
}

export default Inverti;