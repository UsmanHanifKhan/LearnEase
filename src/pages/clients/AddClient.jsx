import React from 'react'
import logo from  '../../assets/images/logo.png'
import { useNavigate } from 'react-router'
const AddClient = () => {
    const navigate=useNavigate();
  return (
    <div div className='m-5 p-5 bg-gray-50 rounded-2xl '>
    <div className='my-5 rounded flex justify-start items-center '>
        <button className='group' onClick={()=>navigate(-1)}>
        <svg class="w-6 h-6 group-hover:text-PrimaryColor text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
        </button><h1 className='text-2xl ml-2'>
        New Client
        </h1>
        </div>  
    <div className='my-5'>
       
      
        <div className='flex flex-row my-5 justify-center'>
            <div className='ml-10 '>
                <div className='flex justify-end my-5 flex-col'>
                <label htmlFor="">Name</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 mt-2 ' placeholder='Muhammad Furqan' type="text" name='name' />
                </div>
                <div className='flex justify-end my-5 flex-col'>
                <label htmlFor="">Address</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 mt-2 ' placeholder='Sadiqabad' type="text" name='address' />
                </div>
                <div className='flex justify-end my-5 flex-col'>
                <label htmlFor="">Email</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 mt-2 ' placeholder='abc@gmail.com' type="email" name='email'   />
                </div>
                <div className='flex justify-end flex-col my-5 '>
                <label htmlFor="">phone</label>
                <input className='ring-1 w-80  shadow ring-gray-200 rounded  focus:ring-PrimaryColor focus:outline-none hover:ring-PrimaryColor px-2 py-1 mt-2 ' placeholder='+92-303-3899077' type="tel" name='title' />
                
                </div>
    <button className='py-2 px-5 w-full border-2 border-transparent bg-PrimaryColor w-50 rounded-lg text-white hover:bg-white hover:border-2 hover:border-PrimaryColor hover:text-PrimaryColor'>Save</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddClient