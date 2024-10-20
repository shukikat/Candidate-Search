import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';


//need to get the response from GitHubuser
const CandidateSearch = () => {
  //need a useState for array of candidates received from searchGitHub
 const [candidates, setCandidates]=useState<Candidate[]>([]);
 const [candidate, setCandidate]=useState<Candidate | null>(null);
 const [selectedUsername, setSelectedUsername]=useState('');

 useEffect(() => {
  console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);
}, []);

 useEffect (()=> {
  const fetchCandidates=async ()=> {
    try {
      const data=await searchGithub();
      setCandidates(data);
    }
    catch (error){
      console.log('Error fetching candidates', error);
    }
  };

  fetchCandidates();

 }, []);

  useEffect (()=> {
    const fetchCandidate=async ()=>{
      if (selectedUsername) {
        try {
          const data=await searchGithubUser(selectedUsername);
    
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
}, [selectedUsername]); 

  // return 
  // <h1>Candidate Search</h1>;
  return (
    <div>
      <h1>Candidate Search</h1>
      <ul>
        {candidates.map((candidate)=> (
          <li key={candidate.username} onClick={()=>setSelectedUsername(candidate.username)}>

            {candidate.name}({candidate.username})
          </li>
        ))}
      </ul>
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
