
import Image from 'next/image';


function HomePage(){
    return (
        <>
         {/* link with home page  */}
            <a href="/category">Category Page</a>
            <p></p>
            <a href="/feedback">Feedback Page</a>
            <p></p>
            <a href="/payment">Payment Page</a>
            <p></p>
            <a href="/admin">Admin Page</a>
            <p></p>

            <h1>Welcome to NSU Cafe Digitaliztion system </h1>
            
            <div className = "logo">
            <Image src = "/restaurant.jpg" width={300} height={200} />
            </div>
        </>
    )

}

export default HomePage;