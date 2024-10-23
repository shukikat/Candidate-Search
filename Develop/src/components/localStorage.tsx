

//handles the data being stored in local storage parses when getting placed in local storage, adds to array, and stringifies when retriving data

const saveCandidateForHire = (candidate:any ) => {
    const storedCandidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    storedCandidates.push(candidate);
    localStorage.setItem('candidates', JSON.stringify(storedCandidates));
  };


export default saveCandidateForHire



    
