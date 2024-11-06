import React from 'react'
import { NAVITEMS } from './Commonutils'

const Header = () => {

  return (
    <div>
      <div>
        <div className='flex justify-between bg-purple-600 w-full p-4 text-white gap-48'>
            <h2 className='flex-1 ml-20 font-semibold text-xl'>
             ALWAYS OPEN! We work 24/7
            </h2>
            <h2 className='flex-1 mr-1 font-semibold text-xl hover:transform '> Call Now! +1 307 312 7469
            </h2>
            </div>
            <div className='bg-zinc-300 pt-14 pb-14 text-base font-semibold text-blue-500'>
            <ul className='flex justify-start gap-7 ml-20'>
             { NAVITEMS.map((navitems)=>( <li>{navitems}</li>))}
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Header;
