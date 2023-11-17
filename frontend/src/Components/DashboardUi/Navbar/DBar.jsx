import { Button } from '@material-tailwind/react';
// import AddProductForm from '../Forms/AddProductForm';

function DBar() {
    // const NavBarListig ={
    //     1 : <AddProductForm/>
    // }


    return (
        <div className='navBar bg-slate-50 py-3 rounded-lg'>
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
        </div>
    )
}

export default DBar;