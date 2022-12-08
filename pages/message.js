import Link from "next/link";

import styles from "../styles/message.module.css";

function message() {
  return (
    <>
      <h1 className={styles.h1}>Thank you for your valueable review. </h1>

      <div>
        <button className={styles.button}>
          {" "}
          <Link href="/">Return to Home</Link>{" "}
        </button>
      </div>
    </>
  );
}

export default message;
