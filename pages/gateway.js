import Link from "next/link";
import Navbar from "../components/Nav"
import Footer from "../components/Footer"

function gateway() {
  return (
    <>
    <Navbar/>
      <form action="/send-data-here" method="post">
        <label for="CardNo">Enter Card Number</label>
        <input type="text" />
        <br />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </form>

      <div>
        <button>
          {" "}
          <Link href="/ptext"> Next</Link>
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default gateway;
