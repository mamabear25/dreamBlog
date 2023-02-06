// import React  from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import moment from "moment";

// const Write = () => {
//   const state = useLocation().state
//   const [first, setFirst] = useState(state?.firstName || "");
//   const [last, setLast] = useState( state?.lastName || "");
//   const [username, setUsername] = useState(state?.username || "");
//   const [email, setEmail] = useState(state?.email || "");
//   const [file, setFile] = useState( state?.img || null);

//   const navigate = useNavigate()

//   const upload = async () => {
//     try{
//       const formData = new FormData();
//       formData.append("file", file)
//       const res = await axios.post("/upload", formData)
//       return res.data

//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const imgUrl = await upload();
//     try{
//       state? await axios.put(`/users/${state.id}`, {
//         first, 
//         last, 
//         username, 
//         email,
//         img:file ? imgUrl : ""
//       }) :
//       await axios.post(`/users/`, {
//         title, 
//         desc:value, 
//         cat, 
//         img:file ? imgUrl : "",
//       });
//       navigate("/")

//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div className="create">
//       <div className="content">
//         <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
//         <div className="editorQuill">
//           <ReactQuill className="editor" 
//           theme="snow" 
//           value={value} 
//           onChange={setValue} />
//         </div>
//       </div>
//       <div className="menu">
//         <div className="item">
//           <h1>Publish</h1>
//           <span><b>Draft</b></span>
//           <input style={{display: "none"}}type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])}/>
//           <label className="file" htmlFor="file">Upload Image</label>
//           <div className="buttons">
//             <button>Save as draft</button>
//             <button onClick={handleSubmit}>Publish</button>
//           </div>
//         </div>
//         <div className="item">
//           <h1>Category</h1>
//           <div className="cat">
//             <input type="radio" checked={cat === "cars"} name="cat" value="cars" id="cars" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="cars">Cars</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "tech"} name="cat" value="tech" id="tech" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="tech">Tech</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="food">Food</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "travel"} name="cat" value="travel" id="travel" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="travel">Travel</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "finance"} name="cat" value="finance" id="travel" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="travel">Finance</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "politics"} name="cat" value="politics" id="travel" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="travel">Politics</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "lifestyle"} name="cat" value="lifestyle" id="lifestyle" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="lifestyle">Lifestyle</label>
//           </div>
//           <div className="cat">
//             <input type="radio" checked={cat === "health"} name="cat" value="health" id="health" onChange={e=>setCat(e.target.value)}/>
//             <label htmlFor="health">Health/Fitness</label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
  



// <div className="gradient-custom-2 mainCont">
//         <MDBContainer className="py-5 h-100">
//             <MDBRow className="justify-content-center align-items-center h-100">
//                 <MDBCol lg="9" xl="7">
//                     <MDBCard>
//                         <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
//                             <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
//                                 <MDBCardImage src={currentUser?.img}
//                                     alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '140px', height: '150px', objectFit: 'cover', zIndex: '1' }} />
//                                 <MDBBtn outline color="dark" style={{height: '30px', width: "100%", overflow: 'hidden', padding: '15px'}}>
//                                     Edit profile
//                                 </MDBBtn>
//                             </div>
//                             <div>
//                              <MDBTypography style={{fontSize: '20px', color: "white"}} tag="h5" className='username'>{currentUser?.username}</MDBTypography>
//                             </div>
//                         </div>
//                         <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
//                             <div className="d-flex justify-content-end text-center py-1">
//                                 <div className="profpostContainer">
//                                     <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
//                                     {/* <MDBCardText className="small text-muted mb-1">Likes</MDBCardText> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <MDBCardBody className="text-black p-4">
//                             <div className='aboutContainer'>
//                                 <p className="lead fw-normal mb-1">About</p>
//                                 <div className="ms-3" style={{ marginTop: '20px' }}>
//                                     <MDBCardText className="font-italic mb-1">First Name: {currentUser?.firstName}</MDBCardText>
//                                     <MDBCardText className="font-italic mb-1">Last Name: {currentUser?.lastName}</MDBCardText>
//                                     <MDBCardText className="font-italic mb-0">Email: {currentUser?.email}</MDBCardText>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center mb-4">
//                                     <MDBCardText className="lead fw-normal mb-0" style={{ marginBottom: '30px' }}>Recent Posts</MDBCardText>
//                                     {/* <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText> */}
//                                 </div>
//                             </div>
//                             <MDBRow>
//                                 <MDBCol className="mb-2">
//                                     <div className='postCont'>
//                                         {userPosts.map((userPost) => (
//                                         <div className="profPost" key={userPost.id}>
//                                             <MDBCardImage src={`../upload/${userPost?.img}`} alt="" className="w-100 rounded-3"/>
//                                             <p>{userPost.title.slice(0, 13)}..</p>
//                                         </div>
//                                         ))}
//                                     </div>
//                                 </MDBCol>
//                             </MDBRow>
//                         </MDBCardBody>
//                     </MDBCard>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//         </div>

//   export default Write;