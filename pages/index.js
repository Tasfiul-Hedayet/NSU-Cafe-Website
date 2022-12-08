import Image from "next/image";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <div className={styles.name}>
        <h1>
          <b>
            <i>Welcome to NSU Cafe Digitaliztion system </i>
          </b>
        </h1>
      </div>

      <div className={styles.logo}>
        <Image src="/restaurant.jpg" width={600} height={600} />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
