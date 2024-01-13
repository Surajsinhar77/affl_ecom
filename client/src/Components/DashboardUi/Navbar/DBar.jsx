import { Link } from 'react-router-dom';
// import AddProductForm from '../Forms/AddProductForm';
import {useAuth} from './../../../common/AuthContext';
import { useNavigate } from 'react-router-dom';

function DBar() {
    
    const navigate = useNavigate();
    const { AdminLogoutFunction } = useAuth();
    function onClickLogOut(){
        AdminLogoutFunction();
        navigate('/admin/login');
    }

    return (
        <div className='navBar bg-slate-50 p-3 rounded-lg'>
            <ul className='flex justify-evenly p-3 items-center'>
                <li>
                    <Link to='/admin/dashboard' className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Home</Link>
                </li>
                <li>
                    <Link className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Setting</Link>
                </li>
                <li>
                    <Link className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Profile</Link>
                </li>
                <li>
                    <Link to='/admin/dashboard/manageInventory' className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Manage Inventory</Link>
                </li>
                <li>
                    <Link to='/admin/dashboard/additems' className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Add Items</Link>
                </li>
                <li>
                    <button onClick={onClickLogOut} className=' rounded-md border-purple-600 border-[1px] text-purple-700 text-sm font-semibold p-2 px-4 shadow-md'>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default DBar;