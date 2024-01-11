import React from 'react'
import Teamcard from './Teamcard';
// Icons From here

function About() {

  const devData = [
    {name:"Suraj Kumar"},
    {name:"Divanshu Gupta"}
  ]
  return (
    <div className='AboutContainer lg:mb-[150px] md:mb-[80px] sm:mb-[40px]'>
      <div className="innerAboutContainer lg:mx-20 md:mx-10 sm:mx-5 m-auto">

        <div className="headingRow m-auto text-gray-600 bg-orange-200 lg:mt-9 md:mt-6 sm:mt-3">
          <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-center lg:pt-10 md:pt-8 sm:pt-6'>About Us</h1>
          <p className=' lg:text-lg md:text-base sm:text-sm lg:p-8 md:p-4 sm:p-2 lg:px-8 md:px-6 sm:px-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptatem sint! Temporibus itaque perferendis in, ipsam harum voluptatem, dignissimos hic molestiae amet, rem repellat incidunt ullam. Velit optio quaerat qui excepturi consequatur officia tempora iusto beatae voluptas. Dignissimos iste placeat tempora expedita perspiciatis sapiente accusamus nemo beatae repellendus quidem asperiores explicabo laboriosam suscipit magnam culpa atque, eligendi illo nihil temporibus necessitatibus minima sit dolore error esse. Officia porro nemo numquam! Minus, nesciunt natus architecto tempora culpa mollitia. Odio accusantium quibusdam debitis necessitatibus nihil ut numquam minus quas, consequatur aperiam eius consectetur saepe culpa veniam exercitationem doloremque molestiae dolore maiores? Quisquam!</p>
        </div>

        <div className="teamContainer">
          <div className="teamContainer">
            <h1 className="teamHeading text-center lg:text-5xl md:text-4xl sm:text-3xl my-14">
              Teams
            </h1>

            {/* Team Card Start Here */}
            <div className="teamRow w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
              {
                devData.map((item, index)=>
                  <Teamcard key={index} data={item}/>
                )
              }
            </div>
            {/* Team Card End here */}

          </div>
        </div>
      </div>

    </div>
  )
}

export default About