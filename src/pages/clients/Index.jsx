import React from 'react'
import ClientDatatable from './Datatable'

const Clients = () => {
  return (
    <div div className='m-5 p-5'>
    <div className='my-5 rounded text-2xl font-bold'>Clients</div>
    <div className='my-5 rounded text-lg text-end'><button className='border-2 py-1 rounded-md  px-3 hover:bg-PrimaryColor hover:text-white  border-PrimaryColor text-PrimaryColor'>add Customer</button></div>
    <div className='my-5'>
    <ClientDatatable/>  
    </div>
    </div>
  )
}

export default Clients