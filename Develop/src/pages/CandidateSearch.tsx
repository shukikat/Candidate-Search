import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import saveCandidateForHire from '../components/localStorage';
import '../index.css';


//need to get the response from GitHubuser
const CandidateSearch = () => {
  //need a useState for array of candidates received from searchGitHub
 const [candidates, setCandidates]=useState<Candidate[]>([]);
 //need to build up array 
 const [currentIndex, setCurrentIndex]=useState(0)
//  const [candidate, setCandidate]=useState<Candidate | null>(null);
const [candidateForHire, setCandidateForHire]=useState<Candidate | null>(null);
//  const [selectedUsername, setSelectedUsername]=useState('');
 //added 15/16
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');


 useEffect (()=> {
  const fetchCandidates=async ()=> {
    //adding this with feedback
    setLoading(true);
    try {
      const data=await searchGithub();
      console.log(data);
      setCandidates(data);
      if (data.length>0) {
        setCandidateForHire(data[0]); //first candidate in search
      }
    
  }
    catch (error){
      console.log('Error fetching candidates', error);
      //adding this line
      setError('Failed to load candidates');
    } 
    //added this to stop loading behavior 
    finally {
      setLoading(false);
    }
  };

  fetchCandidates();

 }, []);

 //adding this variable to move to next candiate 
 const nextCandidate =() =>{
  if (candidates.length>0) {
    const nextIndex=(currentIndex + 1) % candidates.length;
    setCurrentIndex(nextIndex);
    setCandidateForHire(candidates[nextIndex]);
  }
 };
 const saveToLocalStorage =()=>{
  if (candidateForHire) {
    saveCandidateForHire(candidateForHire);
    nextCandidate();
  }
 };

 const removeFromLocalStorage =()=>{
  nextCandidate();
 };

 if(loading) return <p>Loading Candidates...</p>;
 if (error) return <p>{error}</p>;

 return (
  <div>

    <h1> Candidate Search</h1>
    {candidateForHire && (
  <div>
  <h2>{candidateForHire.name}</h2>
  <p>Username: {candidateForHire.username}</p>
  <p>Location: {candidateForHire.location || 'N/A'}</p>
          <img src={candidateForHire.avatar} alt={`${candidateForHire.name}'s avatar`} />
          <p>Email: {candidateForHire.email || 'N/A'}</p>
          <p>Company: {candidateForHire.company || 'N/A'}</p>
          <button onClick={saveToLocalStorage}>+</button>
          <button onClick={removeFromLocalStorage}>-</button>
          <button onClick={nextCandidate}>Next Candidate</button>
  
  </div>
    )}
    </div>
 );
};

//   useEffect (()=> {
//     const fetchCandidate=async ()=>{
//       if (selectedUsername) {
//         try {
//           const data=await searchGithubUser(selectedUsername);
    
//     if (data && data.login) {
    

//     const candidateForHire: Candidate ={
//     name: data.name,
//     username: data.login,
//     location: data.location,
//     avatar: data.avatar_url, 
//     email: data.email,
//     html_url: data.html_url,
//     company: data.company, 

//     };

//     setCandidate(candidateForHire);
//   } else {
//     setCandidate(null);
//   }
// } catch (error) {
//   console.log('Error fetching candidate', error);
//   setCandidate (null);
// }
//     }
//   };

//   fetchCandidate();
// }, [selectedUsername]); 

//   // return 
//   // <h1>Candidate Search</h1>;
//   return (
//     <div>
//       <h1>Candidate Search</h1>
//       <ul>
//         {candidates.map((candidate)=> (
//           <li key={candidate.username} onClick={()=>setSelectedUsername(candidate.username)}>

//             {candidate.name}({candidate.username})
//           </li>
//         ))}
//       </ul>
//       {candidate && (
//         <div>
//           <h2>{candidate.name}</h2>
//           <p>Username: {candidate.username}</p>
//           <p>Location: {candidate.location}|| 'N/A'</p>
//           <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
//           <p>Email: {candidate.email} || 'N/A' </p>
//           <p>Company: {candidate.company} || 'N/A'</p>
//           <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
//             View Profile
//           </a>
//           <button onClick={()=> saveCandidateForHire(candidate)}>+</button>
//           <button>-</button>
//         </div>
        
//       )}
//       <button>Test +</button>
//       <button>Test -</button>
      

//     </div>
//   );



  

// };
export default CandidateSearch
