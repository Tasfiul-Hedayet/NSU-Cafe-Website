import styles from "../styles/foodmenu.module.css";
import Link from "next/link";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

function foodmenu() {
  return (
    <>
      <Navbar />
      <h1> foodmenu </h1>
      <br />


      <div className={styles.container}>

      <button>
          {" "}
          <Link href="/breakfast">
            {" "}
            <Image src="/breakfast.jpg" width={200} height={250} />{" "}
          </Link>{" "}
          <h4>Breakfast</h4>
        </button>

        <button>
          {" "}
          <Link href="/lunch">
            {" "}
            <Image src="/lunch.jpg" width={200} height={200} /> <h4>Lunch</h4>
          </Link>{" "}
        </button>

        <button>
          {" "}
          <Link href="/snacks">
            {" "}
            <Image src="/snacks.png" width={200} height={200} />{" "}
          </Link>{" "}
          <h4>Snacks</h4>
        </button> 

      </div>
      <Footer />
    </>
  );
}

export default foodmenu;
