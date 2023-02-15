import Link from "next/link";
import styles from "../styles/login.module.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function signup() {
  return (
    <>
      <Navbar />
      <h1 className={styles.header}>
        {" "}
        Welcome to NSU Cafe Digitaliztion System
      </h1>
      <br />
      <h2 className={styles.h2}> Register </h2>
      <br />

      <div className={styles.form}>
        <form action="/send-data-here" method="post">
          {/* <label for="name"> Name</label>
          <br /> */}

          <input type="text" className={styles.inbox} name="Name" placeholder="Name" />
          <br />
          <br />

          {/* <label for="email"> Email</label>
          <br /> */}

          <input type="text" className={styles.inbox} name="email" placeholder="Email" />
          <br />

          {/* <label for="pswrd">Password</label>
          <br /> */}
          <br />

          <input
            type="password"
            className={styles.inbox}
            name="pswrd"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            placeholder="password"
          />
          <br />
          <br />
          
          {/* <label for="pswrd">Confirm Password</label>
          <br /> */}

          <input
            type="password"
            className={styles.inbox}
            name="pswrd"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            placeholder="Confirm password"
          />
          <br />
          <br />
        </form>

        <button className={styles.btn}>
          {" "}
          <Link href="/login"> signup </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default signup;
