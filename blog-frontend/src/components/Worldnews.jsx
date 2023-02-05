import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Worldnews = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7bb9cf1ad9f34a1cbf21c73912b80e7c',
        };

        axios.request(options)
            .then(response => {
                setPosts(response.data.articles);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div class="bg-white">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div class="flex flex-row flex-wrap">
                    <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                        <div class="w-full py-3">
                            <h2 class="text-gray-800 text-2xl font-bold">
                                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>World News
                            </h2>
                        </div>

                        <div class="flex flex-row flex-wrap -mx-3">
                        {posts.map((post) => (
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                            <div class="flex flex-row sm:block hover-img">
                                <a href="">
                                <img class="max-w-full w-full mx-auto" src={post.urlToImage} alt="alt title" />
                                </a>
                                <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 class="text-lg font-bold leading-tight mb-2">
                                    <a href="#">{post.title}</a>
                                </h3>
                                <p class="hidden md:block text-gray-600 leading-tight mb-1">{post.description}...</p>
                                <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Europe</a>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last sticky top-0 ...">
                        <div class="w-full bg-gray-50 h-full">
                            <div class="text-sm py-6 sticky top-0 bg-gray-900">
                                <div class="w-full text-center">
                                <a href="https://www.altschoolafrica.com/" class="uppercase text-white" target="_blank">Advertisement
                                    <img class="mx-auto" src="https://media.licdn.com/dms/image/C4D22AQGtj0P9GuJDJA/feedshare-shrink_800/0/1672732079962?e=2147483647&v=beta&t=6aVlG6_4UD5xyrf8QUop5Uke7oWEJpYXoqZlte1_OPY" alt="advertisement area" />
                                 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Worldnews;

