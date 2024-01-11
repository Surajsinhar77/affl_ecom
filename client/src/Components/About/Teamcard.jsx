import React from 'react';
import team1 from '../../assets/Img/headphone.jpg';
import {AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';

function TeamCard({data}) {
    return (
        <div className="memberOne teamCard flex flex-col items-center border border-red-500 py-5 px-3 rounded-lg bg-white">
            <div className='lg:w-48 md:w-40 sm:w-32 lg:h-48 md:h-40 sm:h-32'>
                <img src={team1} alt="team member Image" className=' object-cover rounded-full' />
            </div>
            <p className='my-5 lg:text-3xl md:text-2xl sm:text-xl font-medium'> {data.name} </p>
            <p className='text-blue-500 lg:text-xl md:text-lg sm:text-base'>Developer</p>
            <p className='text-center my-3 lg:text-lg md:text-base sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tempore accusamus recusandae suscipit, libero consequatur aliquid repellendus voluptas explicabo itaque.</p>
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