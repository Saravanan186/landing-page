import { useState } from 'react'
import { FaInstagram } from "react-icons/fa"; 
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { SiPubg } from "react-icons/si";



function Home()  {
  const [cards] = useState([
    {
   tittle : "saravanan",
    text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Non consequuntur nostrum numquam dolorem expedita, nemo omnis architecto vero impedit?",
    fb : "15k"
 
},
{
  tittle : "saravanan",
   text : "Palani",
   fb : "25k"
  
},
{
  tittle : "saravanan",
   text : "Palani",
   

},
 {
  tittle : "saravanan",
   text : "Palani",
},
{
  tittle : "saravanan",
   text : "Palani",
},
{
  tittle : "saravanan",
   text : "Palani",
}
])

return(
  <div>
  <section>
      <div className="container">
      <h1>information</h1>
      <div className="cards shadow-10%">

          {cards.map((card, i) => (
              <div key={i} className="card">
              <h3 >
                  {card.tittle}
              </h3>
              <p>
                {card.text}
                </p>
                <div className="logo">
<div className='text-2xl flex gap-3'><CiFacebook className='bg-blue-700'/><FaInstagram className='bg-pink-600' /><FaTwitter className='bg-blue-400'/><SiPubg className='bg-yellow-400'/></div>
                </div>
                <div>
                <button className="btn">Hire Me</button>
                <div className='text-2xl font-size-10px flex gap-5 pt-4 pl-8'>
                    <div className='bg-blue-700 '><CiFacebook/><div className='pt-4'>{card.fb}</div></div>
                    <div className='bg-pink-600'><FaInstagram /><div className='pt-4'>21m</div></div>
                    <div className='bg-blue-400'><FaTwitter /><div className='pt-4'>11k</div></div>
                    <div className='bg-yellow-400'><SiPubg/><div className='pt-4'>50m</div></div>
                  </div>
                </div>
             </div>
          ))
          }
          </div>            
      </div>
  </section>
</div>)
}
export default Home