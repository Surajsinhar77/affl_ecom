import React, { useState, useTransition, useRef } from "react";
import './Crousal.css';
import img1 from './img1.png';
import img2 from './img22.png';

function Crousal() {
    var l = [
        {
            id:1,
            src:img1
        },
        {
            id:2,
            src:img2
        }
      ];
    
    
      const [count, setCount] = useState(0);
    
      var s = 'w-full h-40 border-solid inline-block absolute top-0 left-0';
    
      function q(){
        setCount(count==0 ? 1 : count-1);
      }
    
      function f(){
        setCount(count==1 ? 0 : count+1);
      }
    
      return (
        <div id="crawler" className='h-[160px] m-10 overflow-x-auto whitespace-nowrap relative top-0 left-0 text-right bg-white'>
          <img id="crawler-img" className={s} key={l[count].id} src={l[count].src} alt='image'></img>
          <div className="absolute top-16 w-5 h-10 bg-gray-400 opacity-50 cursor-pointer" onClick={f}></div>
          <button className="relative top-16  w-5 h-10 bg-gray-400 opacity-50" onClick={q}></button>
        </div>
      );
    }
    
export default Crousal
