import Image from 'next/image'

function Category(){
    return (
        <>
            <div className = "logo">

        {/* link with home page  */}
            <a href="/">Home Page</a>
            <p></p>
            <a href="/feedback">Feedback Page</a>


            <h1>Food Menu</h1>

            <h3>See Category</h3>

            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <Image src = "/kichuri.jpg" width={300} height={200} />
            <p><b>kichuri</b></p>



            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <Image src = "/cake.jpg" width={300} height={200} />
            <p><b>Cake</b></p>
            


            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <Image src = "/rice.jpg" width={300} height={200} />
            <p><b>Rice</b></p>
            


            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <Image src = "/egg.jpg" width={300} height={200} />
            <p><b>Egg Curry</b></p>



            <button className="btn p+20">Order</button>
            <button className="btn p+20">Add [+]</button>
            <Image src = "/water.jpg" width={300} height={200} />
            <p><b>Water</b></p>
            </div>
        </>
      
    )
}

export default Category;