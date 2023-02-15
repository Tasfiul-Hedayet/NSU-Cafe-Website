import styles from "../styles/food.module.css";
import Link from "next/link";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";

function Food() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1> Food Menu </h1>
        <br />

        <Link href="/breakfast">
          <Image src="/breakfast.jpg" width={200} height={200} />
          Breakfast
        </Link>

        <Link href="/lunch">
          <Image src="/lunch.jpg" width={200} height={200} />
          <h4>Lunch</h4>
        </Link>

        <Link href="/snacks">
          <Image src="/snacks.png" width={200} height={200} /> <h4>Snacks</h4>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Food;
