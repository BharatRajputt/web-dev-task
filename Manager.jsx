import React from 'react'
import manager_1 from '../assets/m1.jpeg'
import manager_2 from '../assets/m2.jpeg'
import manager_3 from '../assets/m3.jpeg'
import manager_4 from '../assets/m4.jpeg'
import manager_5 from '../assets/m5.jpeg'
import managerr_2 from '../assets/managerr.jpg'

import './Manager.css'
const Manager = () => {
  
  return (
    <>
   

    <div className='main'>
        <div className="container">
          <h2>Leadership/Management Team</h2>
          <hr />
          <div className="members">
            <div className="team-mem">

              <img src={manager_1} alt="" />
          
            
            
            <div className="contentBx">
              <h4>[James Ford]</h4>
              <p>Founder/CEO</p>
            </div>
           
           
            </div>
            <div className="members">
            <div className="team-mem">

              <img src={managerr_2} alt="" />
          
            
            
            <div className="contentBx">
              <h4>[Perry Aligth]</h4>
              <p>Founder/CEO</p>
            </div>
           
           
            </div>
          </div>
          <div className="members">
            <div className="team-mem">

              <img src={manager_5} alt="" />
          
            
            
            <div className="contentBx">
              <h4>[Devanshi]</h4>
              <p>Development & Growth</p>
            </div>
           
           
            </div>
          </div>
          <div className="members">
            <div className="team-mem">

              <img src={manager_4} alt="" />
          
            
            
            <div className="contentBx">
              <h4>[Moinka Patel]</h4>
              <p>Finance & Operation</p>
            </div>
           
           
            </div>
          </div> 
          <br />

          

          </div>
        
        </div>  
        
    </div>

     </>

  )
}

export default Manager