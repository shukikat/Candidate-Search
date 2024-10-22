// import saveCandidateForHire from "../components/localStorage";
// import React from 'react'

// //need to ensure that data from local storage renders in applicable page 
// //extract data from local storage (via index in array)
// //each row should be saved candidate
// //need code to remove 
// const SavedCandidates = () => {
//   const hireableCandidates=JSON.parse(localStorage.getItem('candidates') ||null);
//   if (!hireableCandidates || hireableCandidates.length===0){
//     <p>"There are no candidates saved"</p>
//   }
 

//   return (
//     <>
//       <h1>Potential Candidates</h1>
      
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Location</th>
//             <th>Email</th>
//             <th>Company</th>
//           </tr>
//         </thead>
//         <tbody>
//           <td>Avatar</td>
//           <td>Name</td>
//           <td>UserName</td>
//           <td>Location</td>
//           <td>Email</td>
//           <td>Company</td>
//           {/* need to remove item from array if - clicked */}
//           <button onClick={()=> saveCandidateForHire(candidate)}>-</button>

//         </tbody>
//         {/* <tbody>
//           {hireableCandidates.map((candidate, index) => (
//             <tr key={index}>
//               <td>{candidate.name}</td>
//               <td>{candidate.username}</td>
//               <td>{candidate.location}</td>
//               <td>{candidate.email}</td>
//               <td>{candidate.company}</td>
//             </tr>
//           ))}
//         </tbody> */}
//       </table>
      
//     </>
//   );
// };

// export default SavedCandidates;
import { useState, useEffect } from 'react';
// import saveCandidateForHire from '../components/localStorage';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidates = () => {
  const [hireableCandidates, setHireableCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Load candidates from local storage on component mount
    const storedCandidates=localStorage.getItem('candidates');
    const parsedCandidates: Candidate[]= storedCandidates ? JSON.parse(storedCandidates):[];
    setHireableCandidates(parsedCandidates);
  }, []);

  const removeCandidate = (username: string) => {
    // Filter out the candidate to remove
    const updatedCandidates = hireableCandidates.filter(candidate => candidate.username !== username);
    setHireableCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates)); // Update local storage
  };

  if (hireableCandidates.length === 0) {
    return <p>There are no candidates saved</p>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hireableCandidates.map((candidate) => (
            <tr key={candidate.username}>
              <td><img src={candidate.avatar} alt={`${candidate.name}'s avatar`} style={{ width: '50px' }} /></td>
              <td>{candidate.name}</td>
              <td>{candidate.username || 'N/A'}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.html_url || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td>
                <button onClick={() => removeCandidate(candidate.username)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
