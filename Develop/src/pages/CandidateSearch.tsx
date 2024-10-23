import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import saveCandidateForHire from '../components/localStorage';
import '../index.css';



const CandidateSearch = () => {
  //need a useState for array of candidates received from searchGitHub
 const [candidates, setCandidates]=useState<Candidate[]>([]);
 //need to build up array 
 const [currentIndex, setCurrentIndex]=useState(0)
//  const [candidate, setCandidate]=useState<Candidate | null>(null);
//uses Candidate interface to determine types
const [candidateForHire, setCandidateForHire]=useState<Candidate | null>(null);
//  const [selectedUsername, setSelectedUsername]=useState('');

 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');

//how to handle serach gitHub response

 useEffect (()=> {
  const fetchCandidates=async ()=> {
    //adding this with feedback to handle loading of page
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
      //adding this line to handle issue when resonse is not received 
      setError('Failed to load candidates');
    } 
    //added this to stop loading behavior 
    finally {
      setLoading(false);
    }
  };

  fetchCandidates();

 }, []);

 //adding this variable to move to next candidate add to the array 
 const nextCandidate =() =>{
  if (candidates.length>0) {
    const nextIndex=(currentIndex + 1) % candidates.length;
    setCurrentIndex(nextIndex);
    setCandidateForHire(candidates[nextIndex]);
  }
 };
 //save candidate to hire to local storage and move to next candidate 
 const saveToLocalStorage =()=>{
  if (candidateForHire) {
    saveCandidateForHire(candidateForHire);
    nextCandidate();
  }
 };


 //just requires move to next candidate 
 const removeFromLocalStorage =()=>{
  nextCandidate();
 };

 //loading and unexpected error behavior 
 if(loading) return <p>Loading Candidates...</p>;
 if (error) return <p>{error}</p>;

 //below behavior handles how data wil be rendered also accounts for is some fields are null
 //also accounts for what elements save to local storage and does not add to local storage 
 return (
  <div>

    <h1> Candidate Search</h1>
    {candidateForHire && (
  <div>
  <h2>{candidateForHire.name}</h2>
  <p>Username: {candidateForHire.username}</p>
  <p>Location: {candidateForHire.location || 'N/A'}</p>
          <img src={candidateForHire.avatar} alt={`${candidateForHire.name}'s avatar`} />
          <p>Email: {candidateForHire.html_url || 'N/A'}</p>
          <p>Company: {candidateForHire.company || 'N/A'}</p>
          <button onClick={saveToLocalStorage}>+</button>
          <button onClick={removeFromLocalStorage}>-</button>
          
  
  </div>
    )}
    </div>
 );
};



export default CandidateSearch
