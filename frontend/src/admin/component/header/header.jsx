import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import img from './payments.png'

function Aheader(){
    return (
        <>
            <div className=' m-5 bg-white p-3 rounded-lg flex justify-between'>
                <div className=' space-x-2'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search' className=' p-2'/>
                </div>
                <div className=' space-x-4 pr-2 flex items-center'>
                    <GitHubIcon/>
                    <NotificationsNoneIcon/>
                    <LightModeOutlinedIcon/>
                    <div className='h-10 w-10 rounded-full overflow-hidden'>
                        <img src={img} alt='profile'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aheader
