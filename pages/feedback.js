import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/feedback.module.css";


function Feedback() {
  return (
    <>

    {/* image part */}

    <div className = {styles.logo}>
    <Image src = "/feedback.png" width={200} height={100} />
    </div>


    {/* Page tile */}
    <div className={styles.title}> <h1>Feedback form</h1></div>
   


    {/* drop down */}
   




    {/* text box section */}

    <form action="/send-data-here" method="post">

    <label for="first">Write down your review:</label>

    <p  className={styles.p1}>
      <input type="text" id="first" name="first" /></p>

    </form>



    {/* submit button section */}
    <div>
      
    <button className="btn p+20"> <Link href="/message">Submit</Link> </button>
    
    </div>


    </>
  )
}

export default Feedback