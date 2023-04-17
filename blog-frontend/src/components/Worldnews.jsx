import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Worldnews = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const apiKey = 'BdQ6UoCeueMo6AocgE4wB0tfIOf3qKvI';
        const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;

        axios.get(url)
        .then(response => {
            const posts = response.data.results.map(post => ({
                id: post.uri.split('/').pop(),
                title: post.title,
                abstract: post.abstract,
                snippet: post.snippet,
                img: post.multimedia[0].url,
                url: post.url,
                publishedDate: post.published_date

            }));
            setPosts(posts);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);     


    return (
        <div className="bg-white">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-gray-800 text-2xl font-bold">
                                <span className="inline-block h-5 border-l-3 border-pink-700 mr-2"></span>World News
                            </h2>
                        </div>
                        <div className="flex flex-row flex-wrap -mx-3">
                        {posts.map((post) => (
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100" key={post.id}>
                                <Link className="flex flex-row sm:block hover-img" to={`/newspage/${post.uri}`}>
                                    <img className="max-w-full w-full mx-auto h-40" src={post.img} alt="news" />
                                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 className="text-lg font-bold leading-tight mb-2">
                                            <div>{post.title.slice(0, 50)}...</div>
                                        </h3>
                                        <p className="hidden md:block text-gray-600 leading-tight mb-1">{post.abstract}...</p>
                                        <a className="text-gray-500 font-large" href="#"><span class="inline-block h-3 border-l-2 border-pink-700 mr-2"></span>{post.publishedDate.slice(0, 10)}</a>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last sticky top-0 ...">
                        <div className="w-full bg-gray-50 h-full">
                            <div className="text-sm py-6 sticky top-0 bg-gray-900">
                                <div className="w-full text-center">
                                <a href="https://www.altschoolafrica.com/" class="uppercase text-white" target="_blank">Advertisement
                                    <img className="mx-auto" src="https://media.licdn.com/dms/image/C4D22AQGtj0P9GuJDJA/feedshare-shrink_800/0/1672732079962?e=2147483647&v=beta&t=6aVlG6_4UD5xyrf8QUop5Uke7oWEJpYXoqZlte1_OPY" alt="advertisement area" />
                                    <img className="mx-auto" src="https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/297544132_171748132027578_9180761575772532267_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFVMcoNpINtSHNyupNYYhd18mnhM8AmWm3yaeEzwCZabSqtcmk6DXC9IHywMGm2VrlE2wxXTjhE8K2AGOdPh1xD&_nc_ohc=H7nD1E1gaqgAX-ts09_&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AfBsVaeg5qjXK5sfErZG6xkjUKUirjLUKza1-WMRkdRLKw&oe=63EB3B47" alt="advertisement area" />
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



