import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <>
    <div className={styles.foot}>
      <div className="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 All Rights Reserved.
        </span>
      </div>
      </div>
    </>
  );
}

export default Footer;
