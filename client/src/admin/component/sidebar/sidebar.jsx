// import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

function Sidebar(){
    return(
        <>
            <div className=" p-4 overflow-y-auto text-black rounded-xl text-xl bg-white h-full shadow-lg w-1/6">
                <div id="title" className=" p-5 text-3xl font-bold">
                    AFFL
                </div>
                <div className=' p-3'>
                    <HomeOutlinedIcon/>
                    &nbsp;&nbsp;Dashboard
                </div>
                <div className=' p-3'>
                    <ManageAccountsOutlinedIcon/>
                    &nbsp;&nbsp;Account Settings
                </div>


                <div className=" text-lg text-gray-600 p-5">
                    Pages
                </div>
                <div className=' p-3'>
                    <LoginOutlinedIcon/>
                    &nbsp;&nbsp;Login
                </div>
                <div className=' p-3'>
                    <PersonAddAltOutlinedIcon/>
                    &nbsp;&nbsp;Register
                </div>
                <div className=' p-3'>
                    <ErrorOutlineOutlinedIcon/>
                    &nbsp;&nbsp;Error
                </div>


                <div className=" text-lg text-gray-600 p-5">
                    User Interface
                </div>
                <div className=' p-3'>
                    <TitleOutlinedIcon/>
                    &nbsp;&nbsp;Typography
                </div>
                <div className=' p-3'>
                    <RemoveRedEyeOutlinedIcon/>
                    &nbsp;&nbsp;Icons
                </div>
                <div className=' p-3'>
                    <TableChartOutlinedIcon/>
                    &nbsp;&nbsp;Tables
                </div>
                <div className=' p-3'>
                    <FeedOutlinedIcon/>
                    &nbsp;&nbsp;Form Layouts
                </div>
            </div>
        </>
    )
}

export default Sidebar;
