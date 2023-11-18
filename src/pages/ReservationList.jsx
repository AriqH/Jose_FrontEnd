// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ReservationList = () => {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/reservations")
//       .then((response) => setReservations(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="reservation-history">
//       <ul>
//         {reservations.map((reservation, index) => (
//           <li key={index}>
//             <div>
//               <strong>Name:</strong> {reservation.name}
//             </div>
//             <div>
//               <strong>Date:</strong> {reservation.date}
//             </div>
//             <div>
//               <strong>Email:</strong> {reservation.email}
//             </div>
//             <div>
//               <strong>Hewan:</strong> {reservation.jenisHewan}
//             </div>
//             <div>
//               <strong>Whatsapp:</strong> {reservation.whatsapp}
//             </div>
//             <div>
//               <strong>Tujuan:</strong> {reservation.tujuan}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReservationList;
