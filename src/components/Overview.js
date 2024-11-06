import React from 'react'

const Overview = () => {
  return (
    <div className='min h-screen bg-white mt-16 ml-36'>
      <h1 className='text-6xl font-bold'>OUR SERVICES</h1>
      <div className='flex mt-10'>
        <div className='w-96 h-72'>
        <img src='About31.jpg' />
        </div>
       
        <div  className='w-96 h-72'>
        <img src='About21.jpg'/>
        </div>
        
        <div  className='w-96 h-72'>
        <img src='About11.jpg' alt="Description" />
        </div>
       
     
      </div>
      <div className='flex justify-start gap-56 mt-2'>
        <div className=''>
            <h3 className='text-4xl font-bold ext-decoration-line: underline mb-8 underline decoration-sky-600'>SALES</h3>
            <ul className='text-xl font-semibold  list-disc'>
                <li>Sales of Products </li><hr/><br/>
                <li> Sales of Services</li><hr/><br/>
                <li>Advertisement </li><hr/><br/>
                <li>Brand Promotion </li><hr/><br/>
                <li>Product Promotion</li><hr/><br/>
                <li>Content Writing</li><hr/><br/>
            </ul>
        </div>
        <div>
            <h3 className='text-4xl font-bold ext-decoration-line: underline mb-8 underline decoration-sky-600'> TECHNICAL</h3>
            <ul className='text-xl font-semibold list-disc '>
                <li className='list-style-type: disc'>Website Designing </li><hr/><br/>
                <li> Website Management</li><hr/><br/>
                <li>SEO </li><hr/><br/>
                <li>Data Base Management </li><hr/><br/>
                <li> Software Services</li><hr/><br/>
            </ul>
        </div>
        <div>
            <h3 className='text-4xl font-bold ext-decoration-line: underline mb-8 underline decoration-sky-600'>OTHER Serevices</h3>
            <ul className='text-xl font-semibold list-disc '>
                <li>Lead Management </li><hr/><br/>
                <li>Blogs </li><hr/><br/>
                <li>Investment/ Investor </li><hr/><br/>
                <li> Email Marketing</li><hr/><br/>
                <li> Event/ Meeting/ Expo/ Conference Management</li><hr/><br/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview;
