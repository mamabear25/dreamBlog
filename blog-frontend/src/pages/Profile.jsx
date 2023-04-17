import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [userPosts, setUserPosts] = useState([]);
    const [postCount, setPostCount] = useState(0);
    // const [editing, setEditing] = useState(false);
    // const [formData, setFormData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     username: "",
    //     email: "",
    //     img: ""
    // });
    // const [success, setSuccess] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/userposts`);
        setUserPosts(res.data);
        setPostCount(res.data.length);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[]);

    const { currentUser } = useContext(AuthContext);

    return (
        <main class="profile-page w-screen">
            <section class="relative block h-500-px">
                <div class="absolute top-0 w-full h-full bg-center bg-cover" 
                style={{backgroundImage: `url('https://images.pexels.com/photos/2337491/pexels-photo-2337491.jpeg?cs=srgb&dl=pexels-lina-kivaka-2337491.jpg&fm=jpg')`}}>
                
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0)"}}>
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
                </div>
            </section>
            <section class="relative py-16 bg-blueGray-200">
                <div class="container mx-auto px-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div class="relative">
                                        <img alt="user image"
                                        src={currentUser?.img || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div class="py-6 px-3 mt-32 sm:mt-0">
                                        <button class="bg-pink-900 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                        Edit Profile
                                        </button>
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{postCount}</span><span class="text-sm text-blueGray-400">Posts</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span class="text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0</span><span class="text-sm text-blueGray-400">Comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                {currentUser?.username}
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Nigeria
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Software Developer - Senior dev. Microsoft
                                </div>
                                <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Lagos, Lagos, Nigeria
                                </div>
                            </div>
                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full lg:w-9/12 px-4">
                                        <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        An artist of considerable range, {currentUser?.firstName} the name taken by
                                        Melbourne-raised, Nigerian-based Nick Murphy writes,
                                        performs and records all of his own music, giving it a
                                        warm, intimate feel with a solid groove structure. An
                                        artist of considerable range.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            {postCount <= 0 ? (
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full lg:w-auto">
                <div className='text-center py-6'>
                    <p>Hey {currentUser?.username}, You haven't published any article yet!</p>
                </div>
            </div>
            ) : (
            <>
            <h3 className="text-2xl font-medium text-center py-10">Recent Post(s)</h3>
            <div className="w-screen justify-center mb-4 flex flex-col lg:flex-row text-center">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full lg:w-auto">
                    <div className="p-8 flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:flex-wrap">
                        {userPosts.map((userPost) => (
                            <div className="mb-4 w-1/3 lg:w-auto mr-10" key={`/post/id`}>
                                <img src={`../upload/${userPost?.img}`} className="w-full h-32 rounded-lg" alt="recent post" />
                                <div className="text-xs font-medium text-gray-800">{userPost.title.slice(0, 13)}..</div>
                            </div>
                        ))}
                    </div>
                    {/* <Link to={""} className="font-normal text-pink-500">Show more</Link> */}
                </div>
            </div>
            </>
            )}
        </main>
    );
}

export default Profile;

