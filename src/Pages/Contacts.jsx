import React from 'react'
import Template from './Template'

const Contacts = () => {
  return (
    <div className='w-full h-screen bg-yellow-300'>
        <Template heading={"Contact Page"}
                para={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci voluptate sed labore suscipit exercitationem facere nihil magnam eius alias aspernatur velit consequatur aut inventore, assumenda esse minima. Aliquid, sapiente!"}
                click={"Contact Button"}
                image={"https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    </div>
  )
}

export default Contacts