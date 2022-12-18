import Link from "next/link";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function payment() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div class="background">
          <div class="auth-box">
            <h2>Card Details</h2>
            <div class="flex">
              <p>First Name</p>
              <input type="text" />
              <p>Last Name</p>
              <input type="text" />
            </div>

            <div class="flex">
              <p>Card No</p>
              <input type="text" />
              <p>CVV</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="rounded-full border-2 hover:border-t-4">
       <Link href="./">Go back</Link>  
        </div>

</div>
      <Footer />
    </>
  );
}

export default payment;
