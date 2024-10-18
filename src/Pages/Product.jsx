import React, { useState } from 'react'



function Product ()  {
    const [cards] = useState([
      {
         tittle :'Card-1',
         text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
          },
          {
            tittle :'Card-2',
            text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
             },
         {
                tittle :'Card-3',
                text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
                 },
                 {
                  tittle :'Card-3',
                  text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
                   }, {
                    tittle :'Card-3',
                    text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
                     },
         {
                    tittle :'card-4',
                    text :`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita repellat cupiditate beatae eos consequatur ducimus, rerum in voluptates alias asperiores, quia sed quod fugiat excepturi modi non. Accusantium, qui corporis.`
                     }
    ])
  return (
    <div>
        <section>
            <div className="container">
            <h1>Responsive cards</h1>
            <div className="cards">

                {cards.map((card, i) => (
                    <div key={i} className="card">
                    <h3>
                        {card.tittle}
                    </h3>
                    <p>
                      {card.text}
                      </p>
                      <button className="btn">Expolore now</button>
                   </div>
                ))
                }
                </div>            
            </div>
        </section>
    </div>
  )
}

export default Product