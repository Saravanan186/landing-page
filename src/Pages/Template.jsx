import React from 'react'

const Template = ({heading, para, click, image}) => {
  return (
        <div className='bg-yellow-100 m-8 mt-0 p-8 h-auto min-h-[60vh] w-auto' 
        style={{backgroundImage: `url(${image})`}}
        >
              <h1 className='text-center font-bold text-2xl mb-8'>{heading}</h1>
              <p>{para}</p>
              <button className='m-8 text-center bg-blue-400 rounded-full p-4'>{click}</button>
        </div>
  )
}

export default Template