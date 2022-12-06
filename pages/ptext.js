import Link from "next/link";
function ptext  () {
  return (
    <>
    <div>
        Your payment is successful. 
        Thank you.
    </div>
    <div>
       <button><Link href="/"> Return to Home</Link> </button>
    </div>
    </>
    
  )
}

export default ptext