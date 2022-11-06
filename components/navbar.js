import Link from 'next/link'
import Header from './Header'

import Footer from './Footer'

function layout () {
  return (
    <> 
<nav className='shadow-md flex flex-wrap justify-center items-center p-4 mb-10 sticky top-0 z-50 bg-white'>
        <ul className='flex'>
            <Link href='/'><li className='mx-3 cursor-pointer'>Home</li></Link>
            <Link href='/about'><li className='mx-3 cursor-pointer'>About</li></Link>
            <Link href='/blog'><li className='mx-3 cursor-pointer'>Blogs</li></Link>
            <Link href='/contact'><li className='mx-3 cursor-pointer'>Contact Us</li></Link>
        </ul>
    </nav>
    </>
  )
}

export default layout