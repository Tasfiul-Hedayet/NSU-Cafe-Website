import Image from 'next/image'

const Feedback = () => {
  return (
    <>
    <h1>Subscription </h1>
    <div className = "logo">
    <Image src = "/feedback.png" width={300} height={200} />
    <button className="btn p-20"> <a href="/payment">Payment Page</a></button>

    </div>
    </>
  )
}

export default Feedback