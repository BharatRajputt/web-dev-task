import React from 'react'
import Developer_1 from '../assets/developer1.jpeg'
import Developer_2 from '../assets/developer2.jpeg'
import Developer_3 from '../assets/developer3.jpeg'
import Developer_4 from '../assets/developer4.jpg'
import Developer_5 from '../assets/developer5.jpeg'
import Developer_6 from '../assets/developer6.jpeg'
import Developer_7 from '../assets/developer7.png'
import Developer_8 from '../assets/developer8.jpeg'

import './Developer.css'
const Developer = () => {
  return (
    <>
   
    <div className="developer-main">
      <div className="developer-container">
        <h2>Developer Team</h2>
        <hr />
        <div className="dev-members">
            <div className="dev-mem">
              <img src={Developer_1} alt="" />
              <h4>James Jhone</h4>
              <p>Software Engineer</p>
            </div> 
            <div className="dev-mem">
              <img src={Developer_8} alt="" />
              <h4>Nehncy</h4>
              <p>Software Engineer</p>
            </div>
           

           
      <div className="dev-members">
            <div className="dev-mem">
              <img src={Developer_3} alt="" />
              <h4>Brenden Mcc.</h4>
              <p>Software Engineer</p>
            </div> 
                
      </div>
      <div className="dev-members">
            <div className="dev-mem">
              <img src={Developer_4} alt="" />
              <h4>Stive Stmith</h4>
              <p>Software Engineer</p>
            </div> 
                
      </div>
      
      </div>
      <div className="dev-members">
            <div className="dev-mem">
              <img src={Developer_5} alt="" />
              <h4>Mitchel Jhos</h4>
              <p>Software Engineer</p>
            </div> 

          
     
      <div className="dev-mem">
              <img src={Developer_6} alt="" />
              <h4>Kane Wili</h4>
              <p>Software Engineer</p>
            </div>
            <div className="dev-mem">
              <img src={Developer_7} alt="" />
              <h4>Dvain Browe</h4>
              <p>Software Engineer</p>
            </div>
            <div className="dev-mem">
              <img src={Developer_8} alt="" />
              <h4>Aliza Benth</h4>
              <p>Software Engineer</p>
            </div>
          
                
                
      </div>
     
     
   
     </div>
    </div>
        
    
     </>
  )
}

export default Developer