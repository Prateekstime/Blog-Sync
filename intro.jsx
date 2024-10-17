import React from 'react'


const intro = () => {
  return (
  <div className='flex flex-row bg-gray-900'>  
    <div className=' min-h-96  '>
      
      <h1 className='m-6'>Welcome to Your <br />
         Daily Dose of Insight</h1>
      <h2 className='w-2/3 p-6'>Discover engaging stories, insightful articles, and the latest trends in one place. Whether you're looking to broaden your horizons or just in need of some inspiration, our blog is your go-to destination for all things thought-provoking and entertaining. Dive in and explore a world of knowledge at your fingertips.</h2>
    </div>
    <div>
      <img src="../imgs/intro-img.jpg" className='h-80 w-80 m-4 align-baseline'></img>
    </div>
  </div>

  )
}

export default intro
