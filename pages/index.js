import 'tailwindcss/base';

import './nprogress.css';
import './base.css';
import './scrollbar.css';
import './fast-image-zoom.css';
import './grid.css';
import './anchor.css';
import './prism.css';
import './gif.css';
import './giscus.css';

import 'tailwindcss/components';
import 'tailwindcss/utilities';
import Image from 'next/image';


function HomePage(){
    return (
        <>
         {/* link with home page  */}
            <a href="/category">Category </a>
            <a href="/feedback"> Feedback </a>
            
            <a href="/payment"> Payment </a>
           
            <a href="/admin"> Admin </a>
          

            <h1>Welcome to NSU Cafe Digitaliztion system </h1>
            
            <div className = "logo">
            <Image src = "/restaurant.jpg" width={300} height={200} />
            </div>
        </>
    )

}

export default HomePage;