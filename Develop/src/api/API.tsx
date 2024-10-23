import Candidate from '../interfaces/Candidate.interface';

const searchGithub = async () => {
  console.log(import.meta.env.VITE_GITHUB_TOKEN)
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          // Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok){
      throw new Error('Invalid API response, check the network tab');
    }
    // console.log('Response:', response);
    const data = await response.json();
   
   
    //ensures that response will handle specific peoperties from response will be returned as Candidate
  return data.map((obj:any) =>{

    // const candidateForHire: Candidate = {
    return {
      name: obj.name,
      username: obj.login,
      location: obj.location,
      avatar: obj.avatar_url, 
      email: obj.email,
      html_url: obj.html_url,
      company: obj.company, 
  
      } as Candidate;

  });
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        // Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,--switched to token trying to trouble shoot 
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    // const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return await response.json();
  } catch (err) {
    console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
