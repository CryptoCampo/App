
import './Stylesheets/Inverti.css';
import { Button, Card, InputNumber } from 'antd';
import CampoNFT from '../Resources/img/CampoNftCC.jpg';

const { Meta } = Card;

function Inverti() {
    return (
        <>
        <div className='d-flex justify-content-center bodyInverti'>
            <div className='row align'>
                <div className='col-md-4 p-5'>
                    <Card  bordered={true} hoverable style={{ width: '17rem' }}
                          cover={<img alt="cryptocampo" src={CampoNFT}/>}>
                          <InputNumber  defaultValue={10} autoFocus size="medium" min={0} 
                            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')} 
                            />
                          <Button variant="success" >Comprar</Button>

                    </Card>
                </div>

           

           
                
                          

            </div>
        </div>
        </>
    );
}

export default Inverti;