import { Link } from 'react-router-dom';
// import AddProductForm from '../Forms/AddProductForm';

function DBar() {
    // const NavBarListig ={
    //     1 : <AddProductForm/>
    // }


    return (
        <div className='navBar bg-slate-50 p-3 rounded-lg'>
            <ul className='flex justify-evenly p-3'>
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
            </ul>
        </div>
    )
}

export default DBar;