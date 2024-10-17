import React from 'react'



const post = () => {
  return (
    <div className='bg-slate-600 p-6 rounded-lg shadow-xl border-spacing-1 cursor-pointer hover:bg-slate-500'>
      <div className=' w-auto flex flex-col '>
        <label htmlFor="" className='rounded-lg font-semibold mt-3' >Blog Title</label>
        <input type="text" id="blogTitle" name="blogTitle" className='rounded-xl w-48' />
      <div className='w-auto flex flex-col'>
        <label htmlFor="" className='rounded-lg font-semibold mt-3'>Blog Discription</label>
        <textarea name="Blog-discription" id="Blog-discription-t" className='h-60 w-96 rounded-2xl'></textarea>
        
      </div>
      {/* <img src={addImage} alt="" /> */}
      <div className=' flex flex-col  justify-center'>
      <button className='bg-blue-500 px-4 rounded-lg font-semibold mt-3'>post</button>
      </div>
        
        

       
      </div>
      <div>

      </div>
    </div>
  )
}

export default post
