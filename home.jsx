import React from 'react'
import Post from './post'
import Intro from './intro'
import Card from './card'
import Catogary from './catogary'

const home = () => {
  return (
    <div className='min-h-screen'>
      <div className='bg-slate-200 border-l-neutral-700 m-4 rounded-lg  mx-6 shadow-lg shadow-gray-500 flex  flex-col justify-between'>
        <Intro/>
        <div className=' m-4 rounded-lg  mx-6 shadow-lg flex  flex-row justify-between flex-wrap'>
        <Card />
        <Catogary/>
       

        </div>
       
       <button className='bg-blue-400'><link rel="stylesheet" href="./post.jsx" />add Blog</button>
      
       
        

      </div>
    </div>
  )
}

export default home
