import React from 'react';
import team1 from '../../assets/Img/headphone.jpg';
import {AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

function TeamCard({data}) {
    return (
        <div className="memberOne teamCard flex flex-col items-center border border-red-500 py-5 px-3 rounded-lg bg-white">
            <img src={team1} alt="team member Image" className='w-48 h-48 object-cover rounded-full' />
            <p className='my-5 text-3xl font-medium'> {data.name} </p>
            <p className='text-blue-500 text-xl'>Developer</p>
            <p className='text-center my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempore accusamus recusandae suscipit, libero consequatur aliquid repellendus voluptas explicabo itaque.</p>
            <div className="socalLinks flex justify-evenly w-full">
                <AiFillLinkedin className='text-3xl text-blue-800' />
                <AiFillFacebook className='text-3xl text-blue-800' />
                <AiFillGithub className='text-3xl text-gray-700' />
                <AiFillInstagram className='text-3xl text-pink-700' />
                <AiFillYoutube className='text-3xl text-red-800' />
            </div>
        </div>
    )
}

export default TeamCard