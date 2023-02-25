import Link from "next/link";
import styles from "../styles/login.module.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function login() {
  return (
    <>
      <Navbar />
      <h1 className={styles.header}>
        Welcome to NSU Cafe Digitaliztion System
      </h1>
      <br />
      <h2 className={styles.h2}> Login Page</h2>
      <br />

      <div className={styles.form}>
        
        <form>
          <input
           type="text" 
           className={styles.inbox}
           name="email"
           placeholder="Email" />
          <br />
          <br />

          <input
            type="password"
            className={styles.inbox}
            name="password"
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            placeholder="Password" 
          />
          <br />
          <br />
        </form>

        <button className={styles.btn}>
          {" "}
          {/* <Link href="/foodmenu"> login </Link>{" "} */}
        </button>
        <br />
        <br />
        <p>{"Don't have account? SignUp now"}</p>
        <br />
        <button className={styles.btn}>
          {" "}
          <Link href="/signup"> signup </Link>{" "}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default login;
