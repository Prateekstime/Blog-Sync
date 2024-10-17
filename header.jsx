import React from 'react'

const header = () => {
  return (
    <div className =" h-16 grid grid-flow-col  justify-between px-4 bg-black gap">
      <div  className =" h-16  flex justify-center ">
        <img src="" alt="" />
        <h1 className ="m-4 text-2xl font-bold text-green-600 hover:text-green-500">Blog sync</h1>
       
      </div>
      <div  className =" min-h-10  flex justify-center gap-8 items-center text-green-600 ">
        
        <button className='border-green-600 bg-black hover:bg-green-600 hover:text-black rounded-2xl'>Home</button>
        <button className='border-green-600 bg-black hover:bg-green-600 hover:text-black rounded-2xl'>Blogs</button>
        <button className='border-green-600 bg-black hover:bg-green-600 hover:text-black rounded-2xl'>About</button>

      </div>
      <div className =" min-h-10  flex justify-center gap-8 items-center">
        <button className='border-orange-600 bg-black hover:bg-orange-600 hover:text-black rounded-2xl'>add post</button>
        <button className='border-orange-600 bg-black hover:bg-orange-600 hover:text-black rounded-2xl'>delete post</button>

      </div>
    </div>
  )
}

export default header
