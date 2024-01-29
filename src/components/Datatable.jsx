import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import DummyData from './DummyData';
const DashDatatable = () => {
    const columns = [
        {
            name: 'Number',
            selector: row => row.id,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },

        {
            name: 'Customer',
            selector: row => <div className='flex gap-2'><img src={row.image} alt="" /> <h1>{row.name}</h1></div>,
        },
        {
            name: 'Status',
            selector: row => <div className={`px-2 text-center w-24 ${row.status==="paid"&&"border-green-600 text-green-600"||"border-red-600 text-red-600"} py-1 border-2 rounded  font-semibold`}> {row.status}</div> 
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Action',
            selector:row=> <button >view more</button>
        }
    ];
  return (  
 <DataTable
            title="Movie List"
			columns={columns}
			data={DummyData}
            pagination
		/>
  )
}
export default DashDatatable