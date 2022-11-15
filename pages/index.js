
import Image from 'next/image';


function HomePage(){
    return (
        <>
            {/* link with home page  */}
            <a href="/foodmenu">Foodmenu </a>
            <a href="/payment"> Subscription </a>
            <a href="/feedback"> Feedback </a>
            <a href="/login"> Login </a>


          

            <h1>Welcome to NSU Cafe Digitaliztion system </h1>
            
            <div className = "logo">
            <Image src = "/restaurant.jpg" width={300} height={200} />
            </div>
        </>
    )

}

export default HomePage;