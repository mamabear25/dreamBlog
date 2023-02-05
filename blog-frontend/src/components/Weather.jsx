import React from "react";
import { useState } from "react";

const Weather = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'http://localhost:3100/src/img/dummy/img14.jpg',
    'http://localhost:3100/src/img/dummy/img15.jpg',
    'http://localhost:3100/src/img/dummy/img16.jpg',
    'http://localhost:3100/src/img/dummy/img17.jpg',
    'http://localhost:3100/src/img/dummy/img18.jpg',
    'http://localhost:3100/src/img/dummy/img18.jpg',
    'http://localhost:3100/src/img/dummy/img18.jpg',
    'http://localhost:3100/src/img/dummy/img18.jpg',
  ];

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  
  return (
    <div className="relative bg-gray-50" style={{backgroundImage: "url('src/img/bg.jpg')",backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed"}}>
  <div className="bg-black bg-opacity-70">
    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div className="flex flex-row flex-wrap">
        <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
          <div className="w-full py-3">
            <h2 className="text-white text-2xl font-bold text-shadow-black">
              <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>American
            </h2>
          </div>
          <div id="post-carousel" className="flex overflow-x-scroll">
            <button onClick={back}>Previous</button>
            <div className="w-1/3 px-2">
                <img src={images[currentIndex]} alt="slider-image" style={{height:"250px"}}/>
            </div>
            <div className="w-1/3 px-2">
                <img src={images[currentIndex + 1]} alt="slider-image" style={{height:"250px"}}/>
            </div>
            <div className="w-1/3 px-2">
                <img src={images[currentIndex + 2]} alt="slider-image" style={{height:"250px"}}/>
            </div>
            <button onClick={next}>Next</button>

            </div>
        </div>
      </div>
    </div>
  </div>
</div>

                      








    // <div class="relative bg-gray-50" style={{backgroundImage: "url('src/img/bg.jpg')",backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed"}}>
    //   <div class="bg-black bg-opacity-70">
    //     <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
    //       <div class="flex flex-row flex-wrap">
    //         <div class="flex-shrink max-w-full w-full py-12 overflow-hidden">
    //           <div class="w-full py-3">
    //             <h2 class="text-white text-2xl font-bold text-shadow-black">
    //               <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>American
    //             </h2>
    //           </div>
    //           <div id="post-carousel" class="splide post-carousel">
    //             <div class="splide__track">
    //               <ul class="splide__list">
    //                 <li class="splide__slide">
    //                   <div class="w-full pb-3">
    //                     <div class="hover-img bg-white">
    //                       <a href="">
    //                         <img class="max-w-full w-full mx-auto" src="src/img/dummy/img14.jpg" alt="alt title" />
    //                       </a>
    //                       <div class="py-3 px-6">
    //                         <h3 class="text-lg font-bold leading-tight mb-2">
    //                           <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
    //                         </h3>
    //                         <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li class="splide__slide">
    //                   <div class="w-full pb-3">
    //                     <div class="hover-img bg-white">
    //                       <a href="">
    //                         <img class="max-w-full w-full mx-auto" src="src/img/dummy/img18.jpg" alt="alt title" />
    //                       </a>
    //                       <div class="py-3 px-6">
    //                         <h3 class="text-lg font-bold leading-tight mb-2">
    //                           <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
    //                         </h3>
    //                         <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </li>
    //                 <li class="splide__slide">
    //                   <div class="w-full pb-3">
    //                     <div class="hover-img bg-white">
    //                       <a href="">
    //                         <img class="max-w-full w-full mx-auto" src="src/img/dummy/img1.jpg" alt="alt title" />
    //                       </a>
    //                       <div class="py-3 px-6">
    //                         <h3 class="text-lg font-bold leading-tight mb-2">
    //                           <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
    //                         </h3>
    //                         <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
}

  
export default Weather;


