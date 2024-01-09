import React from 'react';
import DBar from '../Navbar/DBar';
// import { Button } from '@material-tailwind/react';
import ProductTable from '../ProductTable/ProductTable';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div className='w-4/5 m-auto mt-3'>
            <nav>
                <DBar/>
            </nav>

            <div className="LatestProductdetail mt-7">
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard