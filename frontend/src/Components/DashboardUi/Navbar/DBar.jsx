import { Button } from '@material-tailwind/react';
// import AddProductForm from '../Forms/AddProductForm';
import {useAuth} from '../../../common/AuthContext'
import {useNavigate} from 'react-router-dom';

function DBar() {
    // const NavBarListig ={
    //     1 : <AddProductForm/>
    // }
    const {AdminLogoutFunction} = useAuth();
    const navigate = useNavigate();
    const logoutFunction = () =>{
        AdminLogoutFunction();
        navigate('/admin/login');
    }

    return (
        <div className='navBar bg-slate-50 py-3 rounded-lg flex justify-between px-5'>
            <ul className='flex w-3/5 justify-evenly'>
                <li>
                    <Button className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'>Home</Button>
                </li>
                <li>
                    <Button className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'>Setting</Button>
                </li>
                <li>
                    <Button className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'>Profile</Button>
                </li>
                <li>
                    <Button className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'>Manage inventory</Button>
                </li>
                <li>
                    <Button className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'

                    >Add Items</Button>
                </li>
            </ul>

            <div className=''>
                <Button 
                    className='border border-gray-500 text-purple-700
                    hover:border-purple-700 hover:text-gray-600'
                    onClick={logoutFunction}
                    >Logout</Button>
            </div>
        </div>
    )
}

export default DBar;