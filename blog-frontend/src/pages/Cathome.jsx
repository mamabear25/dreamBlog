import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Editor from "../components/Editor";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import moment from "moment";
import Weather from "../components/Weather";


const Cars = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);

  const cat = useLocation().search

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[cat]);

  // Pagination

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <><div className="w-screen mt-20">
      <Weather />
    </div>
    <div class="mx-auto w-screen rounded-lg shadow mt-20 justify-center flex flex-wrap bg-white">
        {currentPosts.map((cat) => (
          <div class="lg:w-80 sm:w-1/2 px-2 mt-6">
            <img
              src={`../upload/${cat?.img}`}
              class="aspect-video w-full object-cover"
              alt="" />
            <div class="p-4">
              <p class="mb-1 text-sm text-primary-500">{cat.username}<time>{moment(cat.date).format().slice(0, 10)}</time></p>
              <h3 class="text-xl font-medium text-gray-900">{cat.title.slice(0, 20)}...</h3>
              <p class="mt-1 text-gray-500">{getText(cat.desc.slice(0, 200))}...</p>
              <div class="mt-10 flex gap-2">
                <Link to={`/post/${cat.id}`}
                  class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600  hover:bg-blue-400 hover:text-white"
                >
                  Read more
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div></>

    // <>
    // <div className="flex bg-gray-200 p-20 w-screen">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //     {currentPosts.map((cat) => (
    //       <div className="card bg-white rounded-lg overflow-hidden">
    //         <img src={`../upload/${cat?.img}`} alt="" className="w-full h-56 object-cover object-center" />
    //         <div className="px-6 py-4">
    //           <h4 className="text-gray-800 font-medium">{cat.title.slice(0, 20)}...</h4>
    //           <p className="text-gray-600">{getText(cat.desc.slice(0, 110))}...</p>
    //           <Link to={`/post/${cat.id}`} className="block px-4 py-2 font-medium text-pink-900 hover:bg-pink-900 hover:text-white">Read more</Link>
    //         </div>
    //       </div>
    //     ))}

    //   </div>
    // </div>
    // <div>
    //   <Pagination
    //     postsPerPage={postsPerPage}
    //     totalPosts={posts.length}
    //     paginate={paginate} />
    // </div>
    //   </> 
  );
}

export default Cars;


// how do i convert this to loop over a table in the database

// <!-- component -->
// <div class="flex justify-center items-center">
//   <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
//   <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
//     <div role="main" class="flex flex-col items-center justify-center">
//       <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
//       <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
//     </div>
//     <div class="lg:flex items-stretch md:mt-12 mt-8">
//       <div class="lg:w-1/2">
//         <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
//           <div class="sm:w-1/2 relative">
//             <div>
//               <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//               <div class="absolute bottom-0 left-0 p-6">
//                 <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//                 <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//                 <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                   <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                   <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
//           </div>
//           <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
//             <div>
//               <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//               <div class="absolute bottom-0 left-0 p-6">
//                 <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//                 <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//                 <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                   <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                   <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
//           </div>
//         </div>
//         <div class="relative">
//           <div>
//             <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//             <div class="absolute bottom-0 left-0 md:p-10 p-6">
//               <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//               <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//               <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                 <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                 <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
//           <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
//         </div>
//       </div>
//       <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
//         <div class="relative">
//           <div>
//             <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//             <div class="absolute bottom-0 left-0 md:p-10 p-6">
//               <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//               <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//               <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                 <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                 <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" />
//           <img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
//         </div>
//         <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
//           <div class="relative w-full">
//             <div>
//               <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//               <div class="absolute bottom-0 left-0 p-6">
//                 <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//                 <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//                 <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                   <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                   <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
//           </div>
//           <div class="relative w-full sm:mt-0 mt-4">
//             <div>
//               <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
//               <div class="absolute bottom-0 left-0 p-6">
//                 <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
//                 <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
//                 <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                   <p class="pr-2 text-sm font-medium leading-none">Read More</p>
//                   <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>