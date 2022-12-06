
import Link from "next/link";


function gateway  () {
  return(
    <>
    <form action="/send-data-here" method="post">

    <label for="CardNo">Enter Card Number</label>
    <input type="text"/>
    <br/>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    </form>



    <div>
    <button> <Link href="/ptext"> Next</Link></button>
    </div>

  

    </>
  )
}

export default gateway
