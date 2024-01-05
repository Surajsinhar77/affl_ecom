import React from 'react';
import DBar from '../Navbar/DBar';
// import { Button } from '@material-tailwind/react';
import ProductTable from '../ProductTable/ProductTable';

function Dashboard() {
    return (
        <div className='w-4/5 m-auto mt-3'>
            <nav>
                <DBar/>
            </nav>

            <div className="LatestProductdetail w-3/5 mt-7">
                <div className="ProductList">
                    <div className="HeadingProduct">
                        <h1 className='text-4xl uppercase font-medium text-center text-gray-600 mb-5'>Product listing</h1>
                    </div>
                    <div className="Listing mt-2">
                        <ProductTable/>
                        {/* <table className='w-full'>
                            <tbody className='w-4/5'>
                                <th className='justify-evenly'>
                                    <td>S.No</td>
                                    <td>Name</td>
                                    <td>Category</td>
                                    <td>Added Date</td>
                                    <td>Delete</td>
                                </th>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard