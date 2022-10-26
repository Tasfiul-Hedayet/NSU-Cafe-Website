import Image from 'next/image'

const payment = () => {
  return (
    <>
    <h1>Subscription </h1>
    <div className = "logo">
    <Image src = "/pay.jpg" width={300} height={200} />
    </div>
    </>
    
  )
}

export default payment