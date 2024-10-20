import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

//need to get the response from GitHubuser
const CandidateSearch = () => {
 const [candidate, setCandidate]=useState<Candidate | null>(null);
 const [username, setUsername]=useState('');

  useEffect (()=> {
    const fetchCandidate=async ()=>{
      if (username) {
        try {
          const data=await searchGithubUser(username);
    
    if (data && data.login) {
    

    const candidateForHire: Candidate ={
    name: data.name,
    username: data.login,
    location: data.location,
    avatar: data.avatar_url, 
    email: data.email,
    html_url: data.html_url,
    company: data.company, 

    };

    setCandidate(candidateForHire);
  } else {
    setCandidate(null);
  }
} catch (error) {
  console.log('Error fetching candidate', error);
  setCandidate (null);
}
    }
  };

  fetchCandidate();
}, [username]); 

  // return 
  // <h1>Candidate Search</h1>;
  return (
    <div>
      <h1>Candidate Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update username state
      />
      {candidate && (
        <div>
          <h2>{candidate.name}</h2>
          <p>Username: {candidate.username}</p>
          <p>Location: {candidate.location}</p>
          <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );


  

};
export default CandidateSearch
