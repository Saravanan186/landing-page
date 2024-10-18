import React from 'react'
import Template from './Template'


const Abouts = () => {
  return (
    <div className='w-full h-screen bg-green-500'>
      <Template heading={"About Page"}
                para={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci voluptate sed labore suscipit exercitationem facere nihil magnam eius alias aspernatur velit consequatur aut inventore, assumenda esse minima. Aliquid, sapiente!"}
                click={"About Button"}
                image={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    </div>
  )
}

export default Abouts
