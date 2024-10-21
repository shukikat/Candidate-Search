import saveCandidateForHire from "../components/localStorage";
import React from 'react'

//need to ensure that data from local storage renders in applicable page 
//extract data from local storage (via index in array)
//each row should be saved candidate
//need code to remove 
const SavedCandidates = () => {
  const hireableCandidates=JSON.parse(localStorage.getItem('candidates') ||null);
  if (!hireableCandidates || hireableCandidates.length===0){
    <p>"There are no candidates saved"</p>
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
          </tr>
        </thead>
        <tbody>
          <td>Avatar</td>
          <td>Name</td>

        </tbody>
        {/* <tbody>
          {hireableCandidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.username}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
      
    </>
  );
};

export default SavedCandidates;
