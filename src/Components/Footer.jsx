import React, { useState } from 'react'
import { FcAbout } from "react-icons/fc";
import { IoInformationCircle } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";



function Footer ()  {
    const [cards] = useState([
      {
         tittle :'About',
         text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`,
         icon : <FcAbout />
          },
          {
            tittle :'infomation',
            text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`,
            icon : <IoInformationCircle/>
             },
         {
                tittle:'contact',
                text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`,
                icon : <MdAddCall/>
                 }
                 ])
     return (
    <div className=' flex  bg-blue-600'>
        <section>
            <div className="container">
           
            <div className="cards">

                {cards.map((cardr, i) => (                                             
                    <div key={i} className="cardr bg-white">
                       
                   
                      
                   <div>
                    <h2> 
                      <div>
                        
                      </div>
                    <div className="logo">
                      <div className='text-2xl flex gap-3'><span>{cardr.icon}</span><span>{cardr.tittle}</span></div>
                </div>
                   
                <div className="logo">
                      <div className='text-2xl flex gap-3'></div>
                </div>
                <div className="logo">
                      <div className='text-2xl flex gap-3'></div>
                </div>
                        
                    </h2>
                   </div>
                    <p className='font'>
                      {cardr.text}
                      </p>

                     
                      </div>
                ))
                }
                </div>            
            </div>
        </section>
        </div>
  )
}

export default Footer