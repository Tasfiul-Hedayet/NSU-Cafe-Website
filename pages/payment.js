import Link from 'next/link'
import Image from 'next/image'


function payment () {
  return (
    <>
    <h1>Subscription </h1>
    <div className = "logo">
    <Image src = "/pay.jpg" width={300} height={200} />
    </div>
    <button> <Link href="/gateway">Purchase</Link></button>
    
    </>
    
  )
}

export default payment