import Link from 'next/link'
import styles from "../styles/login.module.css";
import Image from 'next/image';


function signup  () {
  return (
    <>
    
    <h1 className={styles.header}> Welcome to NSU Cafe Digitaliztion System</h1>
    <h2 className={styles.h2}> Login Page</h2>


<div className={styles.form}>
<form action="/send-data-here" method="post">


<label for="name"> Name</label>
<br/>


<input type="text" id="first" name="first" />
<br/>


<label for="email"> Email</label>
<br/>


<input type="text" id="email" name="email" />
<br/>


<label for="pswrd">Password</label>
<br/>


<input
type="password"
id="pswrd"
name="pswrd"
pattern="[a-z0-9]{1,15}"
title="Password should be digits (0 to 9) or alphabets (a to z)." />
<br/>
<br/>
</form>


<button className={styles.btn}> <a href="/login"> signup </a> </button>



</div>  
    </>
  )
}

export default signup