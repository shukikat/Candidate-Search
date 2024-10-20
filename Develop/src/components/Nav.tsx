import {Link, useLocation} from 'react-router-dom';
import '../index.css'
import SavedCandidates from '../pages/SavedCandidates.tsx';


const Nav = () => {
  const currentPage=useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages

  //ensure that Home is directed to Candidate Search and Potential Candidates is directed to potential candiates page


  return (
    
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>

      <li className="nav-tab">
        <Link
          to="/SavedCandidates"
          
          className={currentPage === '/PotentialCandiates' ? 'nav-link active' : 'nav-link'}
        >
          Potential Candidates
          </Link>
          </li>
       

      </ul>
      
      
  ) 




    {/* <div>Nav</div> */}

  
};

export default Nav;
