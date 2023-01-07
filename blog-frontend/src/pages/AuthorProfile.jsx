import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";

const AuthorProfile = ({ author }) => {
    const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/userposts/${author.id}`);
        setUserPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[author.id]);

    return (
        <div className="gradient-custom-2 mainCont">
        <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="9" xl="7">
                    <MDBCard>
                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                <MDBCardImage src={author.img}
                                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '140px', height: '150px', objectFit: 'cover', zIndex: '1' }} />
                                <MDBBtn outline color="dark" style={{height: '30px', width: "100%", overflow: 'hidden', padding: '15px'}}>
                                    Edit profile
                                </MDBBtn>
                            </div>
                            <div>
                             <MDBTypography style={{fontSize: '20px', color: "white"}} tag="h5" className='username'>{author.username}</MDBTypography>
                            </div>
                        </div>
                        <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                            <div className="d-flex justify-content-end text-center py-1">
                                <div className="profpostContainer">
                                    <MDBCardText className="small text-muted mb-0">Posts</MDBCardText>
                                    {/* <MDBCardText className="small text-muted mb-1">Likes</MDBCardText> */}
                                </div>
                            </div>
                        </div>
                        <MDBCardBody className="text-black p-4">
                            <div className='aboutContainer'>
                                <p className="lead fw-normal mb-1">About</p>
                                <div className="ms-3">

                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
)}

export default AuthorProfile;

