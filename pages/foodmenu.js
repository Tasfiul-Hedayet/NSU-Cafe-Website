import styles from "../styles/foodmenu.module.css";
import Link from "next/link"
import Image from "next/image"



function foodmenu () {
  return (
    <>

    <h1> foodmenu </h1>
    <br/>

    <div className={styles.food}>
    
    <br/>
    <button > <a href="/breakfast"> <Image src = "/breakfast.jpg" width={300} height={200} />   </a> </button>
    <h4>Breakfast</h4>

    <button > <a href="/lunch"> <Image src = "/lunch.jpg" width={300} height={200} />   </a> </button>
    <h4>Lunch</h4>

    <button > <a href="/snacks"> <Image src = "/snacks.png" width={300} height={200} />   </a> </button>
    <h4>Snacks</h4>

    </div>

    </>
  )
}

export default foodmenu