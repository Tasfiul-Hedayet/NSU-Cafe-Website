import Link from "next/link";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function payment() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="background">
          <div className="auth-box">
            <div className="flex justify-center ...">
              <h1><b>Card Details</b></h1>
              <br />
              <br />
            </div>

            <div className="flex justify-center ">
              <div className="input">
                <p>
                  First Name <input type="text" />
                  Last Name <input type="text" />
                </p>
                <br />
                <p>
                  Card No <input type="text" />
                  CVV <input type="text" />
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full border-2 hover:border-t-4">
          <Link href="./">Go back</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default payment;
