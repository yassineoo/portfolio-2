import Link from 'next/link';
import { useRouter } from 'next/router';
import  { useEffect, useState } from 'react'

export default function Navbar() {
    const [activeElm ,setActiveElm]=useState('About');
    const {pathname} = useRouter();
    useEffect(() => {
      if (pathname == '/') setActiveElm('About');
      if (pathname == '/projects') setActiveElm('Projects');
      if (pathname == '/resume') setActiveElm('Resume');

    
     
    }, [])
    
  return (
    <div className ='flex justify-between px-5 py-3 my-3'>
    <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl'> {activeElm}</span>
    <div className ='flex space-x-5 text-red font-lg flex-end'>
       
       { activeElm !== 'About' 
        && (
            <div className='font-semibold  hover:text-green' onClick = {() => setActiveElm ('About')}> <Link href='/' >

        About    </Link>
        </div>)}
       { activeElm !== 'Projects'  && (
        <div className='font-semibold  hover:text-green font-lg' onClick = {() => setActiveElm ('Projects')}>
        <Link href='/projects' >Projects  </Link>
        </div>)}
       { activeElm !== 'Resume'  &&
       (<div className='font-semibold hover:text-green' onClick = {() => setActiveElm ('Resume')}>
        <Link href='/resume' >Resume  </Link>       </div> )}
       
    
    </div>
    </div>
  )
}
