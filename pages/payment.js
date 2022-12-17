import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Nav"
import Footer from "../components/Footer"

function payment() {
  return (
    <>
      <Navbar/>
      <h1>Subscription </h1>
      <div className="logo">
        <Image src="/pay.jpg" width={300} height={200} />
      </div>
      <button>
        {" "}
        <Link href="/gateway">Purchase</Link>
      </button>
      <Footer/>
    </>
  );
}

export default payment;
