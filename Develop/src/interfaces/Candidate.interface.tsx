// TODO: Create an interface for the Candidate objects returned by the API
//initial interface for candidate created
interface Candidate {

    name: string | null;
    username: string;
    location: string | null;
    avatar: string;
    email?: string | null;
    html_url: string | null;
    company:string | null;



}

export default Candidate


