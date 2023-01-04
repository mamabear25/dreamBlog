// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Cars = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try{
//         const res = await axios.get(`/posts/?cat=${cars}`);
//         setCars(res.data);
//       } catch (err) {
//         console.log(err)
//       }
//     };
//     fetchData();
//   },[cars]);
  
//   return (
//     <div className="carsContainer">
//       <div className="cars">
//         <p className="header">EVERYTHING CARS </p>
//         {cars.map((car) => (
//             <div className="post" key={car.id}>
//                 <img src={`../upload/${car?.img}`} alt="" />
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }
  
// export default Cars;
