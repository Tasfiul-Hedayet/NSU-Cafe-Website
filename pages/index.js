import Image from 'next/image';
import styles from "../styles/index.module.css";

function HomePage(){

    return (
        <>
            {/* link with home page  */}
            <a href="/foodmenu">Foodmenu </a>
            <a href="/payment"> Subscription </a>
            <a href="/feedback"> Feedback </a>
            <a href="/login"> Login </a>
                
            <div className={styles.name}>
            <h1> <i>Welcome to NSU Cafe Digitaliztion system </i></h1>
            </div>
            
            
            <div className = {styles.logo}>
            <Image src = "/restaurant.jpg" width={600} height={600} />
            </div>
                 
           
        </>
    )

}

export default HomePage;