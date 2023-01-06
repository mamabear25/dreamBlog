import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/userposts`);
        setUserPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[]);

    const { currentUser } = useContext(AuthContext);
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer className="py-5 h-100 mainCont">
            <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="9" xl="7">
                    <MDBCard>
                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                            <MDBCardText className="small text-muted mb-0">{currentUser?.firstName}</MDBCardText>
                            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                <MDBCardImage src={currentUser?.img}
                                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '140px', height: '150px', objectFit: 'cover', zIndex: '1' }} />
                                <MDBBtn outline color="dark" style={{height: '30px', width: "100%", overflow: 'hidden'}}>
                                    Edit profile
                                </MDBBtn>
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
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <MDBCardText className="font-italic mb-1">First Name: {currentUser?.firstName}</MDBCardText>
                                    <MDBCardText className="font-italic mb-1">Last Name: {currentUser?.lastName}</MDBCardText>
                                    <MDBCardText className="font-italic mb-0">Email: {currentUser?.email}</MDBCardText>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">{currentUser?.username}</MDBTypography>
                                    <MDBCardText>First Name: {currentUser?.firstName}</MDBCardText>
                                    <MDBCardText>Last Name: {currentUser?.lastName}</MDBCardText>
                                    <MDBCardText>Email: {currentUser?.email}</MDBCardText>

                            </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                                    <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                </div>
                            </div>
                            <MDBRow>
                                <MDBCol className="mb-2">
                                    {userPosts.map((userPost) => (
                                        <div className="profPost" key={userPost.id}>
                                            <MDBCardImage src={`../upload/${userPost?.img}`} alt="" className="w-100 rounded-3"/>
                                            <h2>{userPost.title}</h2>
                                        </div>
                                    ))}
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    );
}

export default Profile;