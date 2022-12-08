import Image from 'next/image'
import Link from 'next/link';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Category(){
    return (
        <>
        <Navbar/>
            <div className = "logo">

        {/* link with home page  */}
           



            <h1>Lunch Menu</h1>

            <h3>See Category</h3>


            <Image src = "/kichuri.jpg" width={300} height={200} />
            <p><b>kichuri</b></p>
            
            <button className="btn p+20"><Link href="/gateway">Purchase</Link></button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>


            <Image src = "/rice.jpg" width={300} height={200} />
            <p><b>Rice</b></p>
            
            <button className="btn p+20"><Link href="/gateway">Purchase</Link></button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>



    
            <Image src = "/egg.jpg" width={300} height={200} />
            <p><b>Egg Curry</b></p>

            <button className="btn p+20"><Link href="/gateway">Purchase</Link></button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>


            <Image src = "/water.jpg" width={300} height={200} />
            <p><b>Water</b></p>

            <button className="btn p+20"><Link href="/gateway">Purchase</Link></button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>

            </div>
            <Footer/>
        </>
      
    )
}

export default Category;