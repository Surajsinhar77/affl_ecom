import {useState} from 'react';

function AddProductForm() {
    const [formTextData, setFormTextData] = useState([]);
    const [formFileData, setFormFileData] = useState([]);

    const handelformData = (e) =>{
        setFormTextData({
            ...formTextData,
            [e.target.name] : e.target.value
        });
    }

    const handelFileData = (e) =>{
        setFormFileData({
            ...formFileData, [e.target.name] : e.target.files[0]
        })
    }

    const gettingAllData=(e)=>{
        e.preventDefault();
        console.log("This is the files and Data :", formFileData);
        console.log("This is text form Data :",formTextData);
    }

    return (
        <div className="addItemform bg-yellow-50 w-3/5 m-auto p-10 rounded-md">
            <div className="heading4Form">
                <h1 className="text-3xl uppercase font-medium mb-7 text-center underline">Add Items</h1>
            </div>
            <form onSubmit={gettingAllData}>
                <div className="row w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto ">
                    <div className="col flex flex-col">
                        <label htmlFor="">Product Name<span className='mandatory text-red-700'>*</span> </label>
                        {/* INPUT */}
                        <input 
                            className="inputBox h-8 pl-3 rounded border border-gray-500" 
                            type="text"     
                            placeholder="iphone 12" 
                            name="productName" 
                            onChange={handelformData}
                            required
                        />
                    </div>


                    <div className="col flex flex-col">
                        <label htmlFor="">Category <span className='mandatory text-red-700'>*</span>
                        </label>
                        <select 
                            className="inputBox h-8 pl-3 rounded" 
                            name="category" 
                            onChange={handelformData}
                            required>
                            <option>Choose</option> 
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Computer accessary">Computer accessary</option>
                        </select>
                    </div>

                    <div className="col flex flex-col">
                        <label htmlFor="">Tags<span className='mandatory text-red-700'>*</span> 
                        </label>
                        <select 
                            className="inputBox2 h-8 pl-3 rounded" 
                            name="productTags" 
                            required
                            onChange={handelformData}
                        >
                            <option>Choose</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Battery">Battery</option>
                            <option value="Diplay">Diplay</option>
                            <option value="Overall">Overall</option>
                            <option value="Buget Phone">Buget Phone</option>
                            <option value="Inovative & Something new">Inovative & Something new</option>
                        </select>
                    </div>

                </div>

                <div className="row">
                    <div className="row">
                        <h1 className="text-xl uppercase font-medium my-7">Key Specification</h1>
                    </div>
                    
                    <div className="col">
                        <label htmlFor="">Enter Specification<span className='mandatory text-red-700'>*</span> </label>
                        <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Display" 
                                name="productSpecDisplay" 
                                onChange={handelformData}
                            />
                        
                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Processor" 
                                name="productSpecProcessor" 
                                onChange={handelformData}
                            />

                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Front Camera" 
                                name="productSpecFrontCamera" 
                                onChange={handelformData}
                            />

                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Rear Camera" 
                                name="productSpecRearCamera" 
                                onChange={handelformData}
                            />
                            
                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Battery Capacity" 
                                name="productSpecBatteryCap" 
                                onChange={handelformData}
                            />

                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Ram" 
                                name="productSpecRam" 
                                onChange={handelformData}
                            />

                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="Storage" 
                                name="productSpecStorage" 
                                onChange={handelformData}
                            />

                            <input 
                                className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                type="text" 
                                placeholder="OS" 
                                name="productSpecOs" 
                                onChange={handelformData}
                            />
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
                            <input 
                                className="inputBox m-auto items-center" 
                                type="file" 
                                placeholder="Display"
                                name='file1'
                                onChange={handelFileData}
                            />

                            <input 
                                className="inputBox m-auto items-center" 
                                type="file" 
                                placeholder="Processor"
                                name='file2' 
                                onChange={handelFileData}
                            />

                            <input 
                                className="inputBox m-auto items-center" 
                                type="file" 
                                placeholder="Front Camera"
                                name='file3' 
                                onChange={handelFileData}
                            />

                            <input 
                                className="inputBox m-auto items-center" 
                                type="file" 
                                placeholder="Rear Camera"
                                name='file4' 
                                onChange={handelFileData}
                            />
                        </div>

                    </div>
                    <div className="w-full flex justify-center">
                        <button className="border-2 h-10 px-10 rounded border-green-600 my-5 text-red font-bold">Upload</button>
                    </div>
                </div>

                <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="">
                        <h1 className="text-xl uppercase font-medium my-7">Flipkart Varient
                            <span className='mandatory text-red-700'>*</span>
                        </h1>
                        <div className="col">
                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="flipkartv1" id="" className="inputBox h-8 pl-3 rounded" onChange={handelformData}>
                                    <option>Choose</option>
                                    <option value="4 GB">4 GB</option>
                                    <option value="6 GB">6 GB</option>
                                    <option value="8 GB">8 GB</option>
                                    <option value="12 GB">12 GB</option>
                                </select>

                                <input 
                                    className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                    type="text" 
                                    placeholder="Rs.25000"
                                    onChange={handelformData}
                                />

                                <input 
                                    className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                    type="text" 
                                    placeholder="Product Link : https://..."
                                    onChange={handelformData}
                                />

                            </div>

                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="flipkartv2" id="" className="inputBox h-8 pl-3 rounded" onChange={handelformData}>
                                    <option>Choose</option>
                                    <option value="4 GB">4 GB</option>
                                    <option value="6 GB">6 GB</option>
                                    <option value="8 GB">8 GB</option>
                                    <option value="12 GB">12 GB</option>
                                </select>

                                <input 
                                    className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                    type="text" 
                                    placeholder="Rs.25000"
                                    onChange={handelformData}
                                />

                                <input 
                                    className="inputBox h-8 pl-3 rounded border border-gray-500" 
                                    type="text" 
                                    placeholder="Product Link : https://..."
                                    onChange={handelformData}
                                />

                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        <h1 className="text-xl uppercase font-medium my-7">Amazon Varient
                            <span className='mandatory text-red-700'>*</span>
                        </h1>
                        <div className="col">
                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="amazonv1" className="inputBox h-8 pl-3 rounded" 
                                onChange={handelformData}>
                                    <option>Choose</option>
                                    <option value="4 GB">4 GB</option>
                                    <option value="6 GB">6 GB</option>
                                    <option value="8 GB">8 GB</option>
                                    <option value="12 GB">12 GB</option>
                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000"
                                onChange={handelformData}
                                />

                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."
                                onChange={handelformData}
                                />
                            </div>

                            <div className="row flex flex-col h-32 justify-evenly">
                                <select name="amazonv2" id="" className="inputBox h-8 pl-3 rounded"
                                onChange={handelformData}
                                >
                                    <option>Choose</option>
                                    <option value="4 GB">4 GB</option>
                                    <option value="6 GB">6 GB</option>
                                    <option value="8 GB">8 GB</option>
                                    <option value="12 GB">12 GB</option>

                                </select>
                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Rs.25000" 
                                onChange={handelformData}
                                />

                                <input className="inputBox h-8 pl-3 rounded border border-gray-500" type="text" placeholder="Product Link : https://..."
                                onChange={handelformData}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="Heading">
                        <h1 className="text-xl uppercase font-medium my-7">Description
                        <span className='mandatory text-red-700'>*</span>
                        </h1>
                    </div>

                    <div className="col">
                        <textarea 
                            name="discription"  
                            className="w-full border h-72 p-5 rounded-md" 
                            onChange={handelformData}
                            required
                        ></textarea>
                    </div>
                </div>


                <div className="row my-5">
                    <div className="col flex">
                        <input type="checkbox"  className="mr-3 w-5" name='termAndAgree' onChange={handelformData} required/>
                        <p className="text-red-800">I agree and Checked everything is correct 
                        <span className='mandatory text-red-700'>*</span>
                        </p>
                    </div>
                    <div className="col flex justify-center">
                        <button className="border-2 h-10 px-10 rounded border-green-600 my-5 text-red font-bold"
                        type='submit'
                        >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default AddProductForm;