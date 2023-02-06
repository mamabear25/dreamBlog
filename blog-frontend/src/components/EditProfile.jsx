// import React, { useState, useEffect } from 'react';
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";
// import axios from "axios";

// const EditProfile = () => {
//     const [userPosts, setUserPosts] = useState([]);
//     const [editing, setEditing] = useState(false);

//     const { currentUser, setCurrentUser } = useContext(AuthContext);

//     useEffect(() => {
//       const fetchData = async () => {
//         try{
//           const res = await axios.get(`/userposts`);
//           setUserPosts(res.data);
//         } catch (err) {
//           console.log(err)
//         }
//       };
//       fetchData();
//     },[]);

//     const handleEdit = async (e) => {
//         e.preventDefault();
//         try {
//             // call API to update the user profile
//             // const updatedUser = ...
//             const updatedUser = await axios.put(`/users`)
//             setCurrentUser(updatedUser);
//             setEditing(false);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <main class="profile-page w-screen">
//             {/* ... */}
//             {editing ? (
//               <div>
//                 <form onSubmit={handleEdit}>
//                   {/* Render form inputs for editing user profile */}
//                   <button type="submit">Save</button>
//                   <button onClick={() => setEditing(false)}>Cancel</button>
//                 </form>
//               </div>
//             ) : (
//               <div>
//                 <div class="px-6">
//                   {/* ... */}
//                   <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
//                     <div class="py-6 px-3 mt-32 sm:mt-0">
//                       <button
//                         class="bg-pink-900 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
//                         type="button"
//                         onClick={() => setEditing(true)}
//                       >
//                         Edit Profile
//                       </button>
//                     </div>
//                   </div>
//                   {/* ... */}
//                 </div>
//               </div>
//             )}
//         </main>
//     );
// };

// export default EditProfile;
