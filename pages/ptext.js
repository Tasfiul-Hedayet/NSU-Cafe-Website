import Link from "next/link";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function ptext() {
  return (
    <>
    <Navbar/>
      <div>Your payment is successful. Thank you.</div>
      <div>
        <button>
          <Link href="/"> Return to Home</Link>{" "}
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default ptext;
