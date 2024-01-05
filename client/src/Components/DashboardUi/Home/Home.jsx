import ProductTable from "../ProductTable/ProductTable"

export default function Home(){
    return (
        <div className="ProductList">
        <div className="HeadingProduct">
            <h1 className='text-4xl uppercase font-medium text-center text-gray-600 mb-5'>Members</h1>
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
)
}
