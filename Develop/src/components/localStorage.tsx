import CandidateSearch from '../pages/CandidateSearch'

//need to ensure that can save candidate to local storage
//contingent on logic if + button is saved 
//else if candidate is NOT saved do NOT save to local storage
//need to continue to save 

//save candidates to an array
function saveCandidateForHire(candidate: string | null){
    let candidates=JSON.parse(localStorage.getItem('candidates')) || [];
    //looks for matching user in the array--i not there array is updated
    if (!candidates.some(c=>c.username===candidate.username)) {

        candidates.push(candidate);

   localStorage.setItem('candidates', JSON.stringify(candidates));

    }

    else {
        console.log('Candidate saved:', candidate);
    }
}


export default saveCandidateForHire



    
