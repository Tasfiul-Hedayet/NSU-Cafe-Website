import Link from 'next/link'

function Navbar () {
  return (
    <> 
        <nav className='shadow-md flex flex-wrap justify-center items-center p-4 mb-10 sticky top-0 z-50 bg-white'>
        <ul className='flex'>
            <Link href='/'><li className='mx-3 cursor-pointer'>Home</li></Link>
            {/* <Link href='/foodmenu'><li className='mx-3 cursor-pointer'>Foodmenu</li></Link> */}
            {/* <Link href='/payment'><li className='mx-3 cursor-pointer'>Payment</li></Link> */}
            <Link href='/feedback'><li className='mx-3 cursor-pointer'>Feedback</li></Link>
            <Link href='/login'><li className='mx-3 cursor-pointer'>Login</li></Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;