import Image from 'next/image'
import Link from 'next/link';

function Category(){
    return (
        <>
            <div className = "logo">

        {/* link with home page  */}
            <a href="/">Home </a>
            <a href="/feedback"> Feedback </a>
            <a href="/foodmenu"> foodmenu</a>



            <h1>Snacks Menu</h1>

            <h3>See Category</h3>

    
            <Image src = "/cake.jpg" width={300} height={200} />
            <p><b>Cake</b></p>

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
        </>
      
    )
}

export default Category;