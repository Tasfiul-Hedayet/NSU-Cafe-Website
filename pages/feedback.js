import Link from "next/link";
import Image from "next/image";
import styles from "../styles/feedback.module.css";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";

function Feedback() {
  return (
    <>
      <Navbar />
      {/* image part */}

      <div className={styles.logo}>
        <Image src="/feedback.png" width={200} height={100} />
      </div>

      {/* Page tile */}
      <div className={styles.title}>
        {" "}
        <h1>Feedback form</h1>
      </div>

      {/* drop down */}

      {/* text box section */}
      <div className={styles.box}>
        <form>
          <label for="first">Write down your review:</label>
          <br />
          <br />
          {/* row = height col = width*/}
          <textarea rows="12" cols="80" name="description">
            {" "}
          </textarea>
          <br />
          <br />
          <button className="button">
            {" "}
            <Link href="/message">Submit</Link>{" "}
          </button>
        </form>
      </div>

      {/* submit button section */}

      <Footer />
    </>
  );
}

export default Feedback;
