import React from 'react'
import './Sales.css'
import sales_2 from '../assets/sales2.jpeg'
import sales_3 from '../assets/sales3.jpeg'
import sales_4 from '../assets/sales4.jpeg'
import sales_5 from '../assets/sales5.jpeg'
import sales_6 from '../assets/sales6.jpeg'
import sales_7 from '../assets/sales7.webp'
import sales_8 from '../assets/sales8.jpeg'
import saless_9 from '../assets/saless9.jpeg'
const Sales = () => {
  return (
    <>
  <div className="developer-main">
      <div className="developer-container">
        <h2>Sales Team</h2>
        <hr />
        <div className="dev-members">
            <div className="dev-mem">
              <img src={sales_2} alt="" />
              <h4>Surendra Singh</h4>
              <p>Team Lead</p>
            </div> 
            <div className="dev-mem">
              <img src={sales_3} alt="" />
              <h4>Chirag Billas</h4>
              <p>Sales Officer</p>
            </div>
           

           
      <div className="dev-members">
            <div className="dev-mem">
              <img src={sales_4} alt="" />
              <h4>Vijay Singh</h4>
              <p>Sales Officer</p>
            </div> 
                
      </div>
      <div className="dev-members">
            <div className="dev-mem">
              <img src={sales_5} alt="" />
              <h4>Treant Boul</h4>
              <p>Marketing Officer</p>
            </div> 
                
      </div>
      
      </div>
      <div className="dev-members">
            <div className="dev-mem">
              <img src={sales_6} alt="" />
              <h4>Harmanjot</h4>
              <p>Marketing Officer</p>
            </div> 

          
     
      <div className="dev-mem">
              <img src={sales_7} alt="" />
              <h4>Richard Bentoff</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="dev-mem">
              <img src={sales_8} alt="" />
              <h4>Jonny Pope</h4>
              <p>Marketing Officer</p>
            </div>
            <div className="dev-mem">
              <img src={saless_9} alt="" />
              <h4>Ravindra </h4>
              <p>Marketing Officer</p>
            </div>
          
                
                
      </div>
     
     
   
     </div>
    </div>

     </>

  )
}

export default Sales