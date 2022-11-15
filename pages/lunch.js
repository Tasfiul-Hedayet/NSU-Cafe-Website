import Image from 'next/image'

function Category(){
    return (
        <>
            <div className = "logo">

        {/* link with home page  */}
            <a href="/">Home </a>
            <a href="/feedback"> Feedback </a>
            <a href="/foodmenu"> foodmenu</a>



            <h1>Lunch Menu</h1>

            <h3>See Category</h3>


            <Image src = "/kichuri.jpg" width={300} height={200} />
            <p><b>kichuri</b></p>
            
            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>


            <Image src = "/rice.jpg" width={300} height={200} />
            <p><b>Rice</b></p>
            
            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>



    
            <Image src = "/egg.jpg" width={300} height={200} />
            <p><b>Egg Curry</b></p>

            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>


            <Image src = "/water.jpg" width={300} height={200} />
            <p><b>Water</b></p>

            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>

            </div>
        </>
      
    )
}

export default Category;