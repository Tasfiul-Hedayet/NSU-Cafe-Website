import Image from 'next/image'

function Category(){
    return (
        <>
        
        <div className = "logo">

        {/* link with home page  */}
            <a href="/">Home </a>
            <a href="/feedback"> Feedback </a>
            <a href="/foodmenu"> foodmenu</a>


            <h1>Breakfast Menu</h1>

            <h3>See Category</h3>

    
            
            <Image src = "/porota.jpg" width={300} height={200} />
            <p><b>Porota</b></p>
            
            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <br/>
            <br/>

            <Image src = "/sobji.jpg" width={300} height={200} />
            <p><b>Sobji</b></p>

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