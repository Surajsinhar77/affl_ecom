

function AddProductForm() {
    return (
        <div className="addItemform bg-yellow-50 w-3/5 m-auto p-10 rounded-md">
            <div className="heading4Form">
                <h1 className="text-3xl uppercase font-medium mb-7 text-center underline">Add Items</h1>
            </div>
            <form>
                <div className="row w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto ">
                    <div className="col flex flex-col">
                        <label htmlFor="">Product Name</label>
                        <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="iphone 12" name="productName" />
                    </div>

                    <div className="col flex flex-col">
                        <label htmlFor="">Category</label>
                        <select className="inputBox h-8 pl-3 rounded" name="category" id="">
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Computer accessary">Computer accessary</option>
                        </select>
                    </div>

                    <div className="col flex flex-col">
                        <label htmlFor="">Tags</label>
                        <select className="inputBox h-8 pl-3 rounded" name="productTags" id="">
                            <option value="Gaming">Gaming</option>
                            <option value="Gaming">Battery</option>
                            <option value="Gaming">Diplay</option>
                            <option value="Gaming">Overall</option>
                            <option value="Gaming">Buget Phone</option>
                            <option value="Gaming">Buget Phone</option>
                            <option value="Gaming">Buget Phone</option>
                            <option value="Gaming">Inovative & Something new</option>
                        </select>
                    </div>

                </div>

                <div className="row">
                    <div className="row">
                        <h1 className="text-xl uppercase font-medium my-7">Key Specification</h1>
                    </div>
                    
                    <div className="col">
                        <label htmlFor="">Enter Specification</label>
                        <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Display" name="productSpecDisplay"/>
                        {/* <button className="ml-5 border h-8 px-3 border-gray-600 rounded-md flex items-center">Add more</button> */}
                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Processor" name="productSpecProcessor"/>

                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Front Camera" name="productSpecFrontCamera"/>

                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rear Camera" name="productSpecRearCamera"/>
                            
                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Battery Capacity" name="productSpecBatteryCap"/>

                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Ram" name="productSpecRam"/>

                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Storage" name="productSpecStorage"/>

                            <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="OS" name="productSpecOs"/>
                        </div>

                    </div>
                </div>


                <div className="row">
                    <div className="row">
                        <h1 className="text-xl uppercase font-medium my-7">Image Uploader</h1>
                    </div>
                    
                    <div className="col">
                        <label htmlFor="">Upload Image</label>
                        <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input className="inputBox m-auto items-center" type="file" placeholder="Display" />
                        
                            <input className="inputBox m-auto items-center" type="file" placeholder="Processor" />
                            <input className="inputBox m-auto items-center" type="file" placeholder="Front Camera" />

                            <input className="inputBox m-auto items-center" type="file" placeholder="Rear Camera" />
                            
                            
                        </div>

                    </div>
                    <div className="w-full flex justify-center">
                        <button className="border-2 h-10 px-10 rounded border-green-600 my-5 text-red font-bold">Upload</button>
                    </div>
                </div>

                <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="">
                        <h1 className="text-xl uppercase font-medium my-7">Flipkart Varient</h1>
                        <div className="col">
                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="" id="" className="inputBox h-8 pl-3 rounded">
                                    <option value="4 GB">4 GB</option>
                                    <option value="4 GB">6 GB</option>
                                    <option value="4 GB">8 GB</option>
                                    <option value="4 GB">12 GB</option>
                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000"/>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."/>
                            </div>

                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="" id="" className="inputBox h-8 pl-3 rounded">
                                    <option value="4 GB">4 GB</option>
                                    <option value="4 GB">6 GB</option>
                                    <option value="4 GB">8 GB</option>
                                    <option value="4 GB">12 GB</option>
                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000"/>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        <h1 className="text-xl uppercase font-medium my-7">Amazon Varient</h1>
                        <div className="col">
                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="" id="" className="inputBox h-8 pl-3 rounded">
                                    <option value="4 GB">4 GB</option>
                                    <option value="4 GB">6 GB</option>
                                    <option value="4 GB">8 GB</option>
                                    <option value="4 GB">12 GB</option>
                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000"/>

                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."/>
                            </div>

                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="" id="" className="inputBox h-8 pl-3 rounded">
                                    <option value="4 GB">4 GB</option>
                                    <option value="4 GB">6 GB</option>
                                    <option value="4 GB">8 GB</option>
                                    <option value="4 GB">12 GB</option>
                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000" />

                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Heading">
                        <h1 className="text-xl uppercase font-medium my-7">Discription</h1>
                    </div>

                    <div className="col">
                        <textarea name="" id="" className="w-full border h-72 p-5 rounded-md" ></textarea>
                    </div>
                </div>


                <div className="row my-5">
                    <div className="col flex">
                        <input type="checkbox"  className="mr-3 w-5"/>
                        <p className="text-red-800">I agree and Checked everything is correct </p>
                    </div>
                    <div className="col flex justify-center">
                        <button className="border-2 h-10 px-10 rounded border-green-600 my-5 text-red font-bold">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default AddProductForm;