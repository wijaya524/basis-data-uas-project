import React from 'react'

import { IoIosSearch } from "react-icons/io";

const NavbarComponents2 = () => {

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Product', href: '#' }
      ]

  return (
    <>
      <nav className=' flex justify-between items-center px-16'>
         <div>
            main nav
         </div>
         <div>
            <ul>
                {navigation.map((item) => (
                    <li key={item.name}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
         </div>
         <div>
            <div className='relative flex items-center'>
              <button className='absolute z-10 p-2  rounded-full overflow-hidden bg-slate-200'><IoIosSearch /></button>
              <input className='  pl-10 w-44 outline-none focus:bg-slate-400 rounded-l-full' placeholder='test' type="text" name="test" id="test" />   
            </div>
        </div>  
      </nav> 
    </>
  )
}

export default NavbarComponents2
