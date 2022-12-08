import Link from "next/link";
import styles from "../styles/login.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function login() {
  return (
    <>
    <Navbar/>
      <h1 className={styles.header}>
        {" "}
        Welcome to NSU Cafe Digitaliztion System
      </h1>
      <h2 className={styles.h2}> Login Page</h2>

      <div className={styles.form}>
        <form action="/send-data-here" method="post">
          <label for="email"> Email</label>
          <br />

          <input type="text" id="email" name="email" />
          <br />

          <label for="pswrd">Password</label>
          <br />

          <input
            type="password"
            id="pswrd"
            name="pswrd"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
          />
          <br />
          <br />
        </form>

        <button className={styles.btn}>
          {" "}
          <Link href="/foodmenu"> login </Link>{" "}
        </button>

        <p>{"Don't have account? SignUp now"}</p>

        <button className={styles.btn}>
          {" "}
          <Link href="/signup"> signup </Link>{" "}
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default login;
