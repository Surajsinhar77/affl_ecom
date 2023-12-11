import React from 'react'

import ProfilePage from '../Profile/ProfilePage'

function Contact() {
  return (
    // <ProfilePage/>
    <div>
      <div className="mainContactDiv bg-slate-200 rounded w-[50%] m-auto mb-20">
        <div className="row my-5">
          <h1 className='mainHeading font-bold text-4xl'>Contact Us</h1>
        </div>
        <div className="mainFormDiv uppercase">
          <div className="row">
            <div className="nameDiv">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" name="fullname" />
            </div>

            <div className="email-and-phone row flex">
              <div className="email row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
              </div>
              <div className="phoneno row">
                <label htmlFor="phoneno">Phone</label>
                <input type="number" name="phoneno" />
              </div>
            </div>

            <div className="Motive">
              <label htmlFor="Motive">Motive</label>
              <input type="text" name="Motive" />
            </div>

            <div className="row message flex">
              <label htmlFor="Message">Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact