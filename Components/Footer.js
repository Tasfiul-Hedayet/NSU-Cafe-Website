import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <>
      <div className="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"></ul>
      </div>
    </>
  );
}

export default Footer;
