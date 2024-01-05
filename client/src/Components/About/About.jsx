import React from 'react'
import Teamcard from './Teamcard';
// Icons From here

function About() {
  return (
    <div className='AboutContainer mb-[150px]'>
      <div className="innerAboutContainer  w-3/4 m-auto">

        <div className="headingRow m-auto text-gray-600 bg-orange-200 mt-10">
          <h1 className='text-7xl text-center pt-10'>About Us</h1>
          <p className='mt-5 text-center p-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem sint! Temporibus itaque perferendis in, ipsam harum voluptatem, dignissimos hic molestiae amet, rem repellat incidunt ullam. Velit optio quaerat qui excepturi consequatur officia tempora iusto beatae voluptas. Dignissimos iste placeat tempora expedita perspiciatis sapiente accusamus nemo beatae repellendus quidem asperiores explicabo laboriosam suscipit magnam culpa atque, eligendi illo nihil temporibus necessitatibus minima sit dolore error esse. Officia porro nemo numquam! Minus, nesciunt natus architecto tempora culpa mollitia. Odio accusantium quibusdam debitis necessitatibus nihil ut numquam minus quas, consequatur aperiam eius consectetur saepe culpa veniam exercitationem doloremque molestiae dolore maiores? Quisquam!</p>
        </div>

        <div className="teamContainer">
          <div className="teamContainer">
            <h1 className="teamHeading text-center text-5xl my-14">
              Teams
            </h1>

            {/* Team Card Start Here */}
            <div className="teamRow w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
              <Teamcard/>
              <Teamcard/>
              <Teamcard/> 
              <Teamcard/>
            </div>
            {/* Team Card End here */}

          </div>
        </div>
      </div>

    </div>
  )
}

export default About