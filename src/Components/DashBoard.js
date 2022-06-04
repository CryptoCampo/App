import './Stylesheets/DashBoard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import ProfilePicChanger from './ProfilePicChanger.js';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd";

function DashBoard() {
    return (
        <>
            <div className='row' id='bodyDash'>
                <div className='row justify-content-center'>

                    {/* <Avatar size={140} icon={<UserOutlined />} />
                 <ProfilePicChanger /> */}
                    <h1 className='Title'>Mis Inversiones</h1>
                    <hr></hr>
                </div>
           
            <div className='row rowHr'>
           
            </div>
            <div className='row'>
            </div>
            </div>
        </>
    );
}

export default DashBoard;