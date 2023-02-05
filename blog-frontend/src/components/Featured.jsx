import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Featured = () => {
    const [feature, setFeatured] = useState({});
    const [posts, setPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
        try{
            const res = await axios.get(`/feature`);
            setFeatured(res.data);
        } catch (err) {
            console.log(err)
        }
        };
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
        try{
            const res = await axios.get(`/popular`);
            setPosts(res.data);
        } catch (err) {
            console.log(err)
        }
        };
        fetchData();
    },[]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <div class="bg-white mt-16 py-6">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
            <div class="relative hover-img max-h-98 overflow-hidden">
              <a href="#">
                <img class="max-w-full w-full mx-auto h-auto" src="https://smedigest.com.ng/wp-content/uploads/2020/03/top-10-ways-to-inspire-your-staff.jpg" alt="Image description" />
              </a>
              <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                <a href="#">
                  <h2 class="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                </a>
                <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                <div class="pt-2">
                  <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Europe</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-shrink max-w-full w-full lg:w-1/2">
            <div class="box-one flex flex-row flex-wrap">
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="#">
                    <img class="max-w-full w-full mx-auto h-auto" src="https://www.shutterstock.com/image-photo/corn-field-260nw-530623666.jpg" alt="Image description" />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno</div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="#">
                    <img class="max-w-full w-full mx-auto h-auto" src="https://smedigest.com.ng/wp-content/uploads/2020/03/top-10-ways-to-inspire-your-staff.jpg" alt="Image description" />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Architecture</div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="#">
                    <img class="max-w-full w-full mx-auto h-auto" src="https://smedigest.com.ng/wp-content/uploads/2020/03/top-10-ways-to-inspire-your-staff.jpg" alt="Image description" />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Interior</div>
                    </div>
                  </div>
                </div>
              </article>
              <article class="flex-shrink max-w-full w-full sm:w-1/2">
                <div class="relative hover-img max-h-48 overflow-hidden">
                  <a href="#">
                    <img class="max-w-full w-full mx-auto h-auto" src="https://smedigest.com.ng/wp-content/uploads/2020/03/top-10-ways-to-inspire-your-staff.jpg" alt="Image description" />
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                    </a>
                    <div class="pt-1">
                      <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Lifestyle</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

        // <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
        //     <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        //         <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
        //             <div className="flex flex-col space-y-8 md:space-y-12">
        //                 {currentPosts.map((post) => (
        //                 <div className="flex flex-col">
        //                     <h3 className="flex items-center space-x-2 dark:text-gray-400">
        //                         <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
        //                         <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
        //                     </h3>
        //                     <div className="flex px-1" key={post.id}>
        //                         <div className="flex flex-col flex-grow">
        //                             <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{getText(post.title.slice(0,100))}</a>
        //                             <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{getText(post.desc.slice(0,50))}...</a>
        //                             <p className="mt-auto text-xs dark:text-gray-400">{moment(post.date).fromNow()}
        //                                 <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Leroy Jenkins</a>
        //                             </p>
        //                         </div>  
        //                     </div>
        //                 </div>
        //                 ))}
        //             </div>
        //             <div className="flex flex-col w-full space-y-2">
        //                 <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
        //                     <div className="w-1/2 h-full dark:bg-violet-400"></div>
        //                 </div>
        //                 <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
        //                     <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
        //                     <svg viewBox={'0 0 24 24'} strokeWidth={2.5} fill={"none"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"w-4 strokeCurrent dark:text-violet-400"}>
        //                         <line x1="5" y1="12" x2="19" y2="12"></line>
        //                         <polyline points="12 5 19 12 12 19"></polyline>
        //                     </svg>
        //                 </a>
        //             </div>
        //         </div>
        //         <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
        //             <Link to={`feature/${feature.id}`}>
        //                 <img className="object-cover h-full" src={`../upload/${feature?.img}`} alt="" />
        //                 <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">{feature.title}</span>
        //                 <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
        //                     <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
        //                         <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
        //                             <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
        //                         </span>
        //                     </span>
        //                 </a>
        //             </Link>
        //         </div>
        //         <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
        //             <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
        //                 <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
        //                 <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
        //             </div>
        //             <div className="flex flex-col divide-y divide-gray-700">
        //                 {currentPosts.map((post) => (
        //                 <div className="flex px-1 py-4" key={post.id}>
        //                     <img className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={`../upload/${post?.img}`} alt="" />
        //                     <div className="flex flex-col flex-grow">
        //                     <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{post.title}</a>
        //                     <p className="mt-auto text-xs dark:text-gray-400">{moment(post.date).fromNow()}
        //                         <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">{post.cat}</a>
        //                     </p>
        //                 </div>  
        //                 </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Featured;


