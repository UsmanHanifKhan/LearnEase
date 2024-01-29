import React from 'react'
import DashCard from '../../components/DashCard'
import DashBarChart from '../../components/BarChart'
import DashDatatable from './Datatable'
const Dashboard = () => {
  return (
    <div div className='m-5 p-5'>
    <div className='my-5 rounded text-2xl font-bold'>Dashboard</div>
    <div className='flex w-full gap-4'>
        <div className='card grid grid-flow-row  w-1/2 gap-3'>
            <div className='flex gap-2 w-full'>
                <DashCard color="#72d4ad" label="All Invoices" type="Weekly" value="10"/>
                <DashCard color="#587ad9" label="Scheduled" type="Weekly" value="20"/>
           
            </div>
            <div className='flex gap-2 w-full'>
            <DashCard color="#fd6b69" label="Unpaid" type="Monthly" value="$3450"/>
            <DashCard color="#fa69fd" label="Paid" type="Monthly" value="$5450"/>
            </div>
        </div>
        <div className=' bg-cardbg  w-1/2 rounded-2xl bottom-0'>
            {/* <h1>Weak to Weak Performance</h1> */}
           <DashBarChart/>
        </div>
    </div>
    <div className='my-5'>
    <DashDatatable/>  
    </div>
    </div>
    
  )
}

export default Dashboard