import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import DummyData from '../../components/DummyData';
import avatar from '../../assets/images/avatar.png'
import DummyClients from '../../components/DummyClients';
const ClientDatatable = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => <div className='flex gap-2 items-center'><img className='w-10' src={avatar} alt="" /> <h1 className=''>{row.name}</h1></div>,
        },
        {
            name: 'Phone no',
            selector: row => row.phone_number,
        },
        {
            name: 'Address',
            selector: row => row.address,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Action',
            selector:row=> <button className='p-1 border-2 rounded-md hover:border-PrimaryColor group'><svg class="w-6 h-6 text-gray-300 group-hover:text-PrimaryColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h0m6 0h0m6 0h0"/>
          </svg></button>
        }
    ];
  return (  
 <DataTable
        
			columns={columns}
			data={DummyClients}
            pagination
		/>
  )
}
export default ClientDatatable