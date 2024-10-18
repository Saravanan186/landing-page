import React from 'react'
import Template from './Template'



const Home = () => {

  let Obj = [
    {
    name: "saravanan",
    age: 23,
    place : "Palani",
},
{
    name: "sds",
    age: 25,
    place : "Palani"
},
{
    name: "naveen",
    age: 25,
    place : "Palani"
},
{
  name: "naveen",
  age: 25,
  place : "Palani"
},
{
  name: "naveen",
  age: 25,
  place : "Palani"
},
{
  name: "sds",
  age: 25,
  place : "Palani"
},
{
  name: "sds",
  age: 25,
  place : "Palani"
}]



  return (
    <div className='w-full min-h-screen h-auto bg-red-500'>
        {/* <div className='bg-yellow-100 m-8 mt-0 p-8 h-auto min-h-[60vh] w-auto'> */}
        <Template heading={"Home Page"} 
                para={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae saepe temporibus distinctio, assumenda rerum provident quaerat nostrum necessitatibus enim eos blanditiis asperiores delectus quos, illum quibusdam. Deleniti, expedita, sequi excepturi amet optio, possimus harum fuga iusto doloribus debitis provident aperiam!"} 
                click={"Home Button"}
                image={"https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
        {/* </div> */}

        {/*  */}

        {Obj.map(o => (
          <div className='flex m-2'>
            <div className='flex flex-col h-[200px] bg-blue-400 m-2 p-4 rounded-xl ' >
            <div><span className='font-bold'>Name :</span>{o.name}</div>
            <div><span className='font-bold'>Age :</span>{o.age}</div>
            <div><span className='font-bold'>Location :</span>{o.place}</div>
            {/* <img src={o.image} alt="" className='object-cover w-20'/> */}
          </div>
          </div>
        ))}
    </div>
  )
}

export default Home