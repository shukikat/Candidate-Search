# Candidate-Search
This project is designed to search for the most highly qualified candidates. 

## Description

This application is built with React, REACTDOM, and inititated with Vite in Typescript. In this application, you are presented with potential candidates for a job. The candidate information includes their name, username, avatar, email, and HTML. As a recruiter (i.e., the user) you will have the option to save the candidate's information as a potential candidate or reject them. When you choose to save the candidate, their information is saved into local storage.   


The list of potential or saved candidates can be accessed in a table. From this table you have the option to remove candidates from the potential candidate list. You can access the search for candidates or potential candidates in this project by clicking on the navigation links in the header. 


## Installation

This project is build using React. To run and initiate the app the user must install:

 * Vite using the command `createvite@latest`
 * React and REACTDOM using the command `npm install react react-dom`
 

## Usage 

Prerequisites: Ensure you have React, REACTDOM, Vite installed and any additional dependencies via `npm install`. 

To run this project:

* Open the command line.
* Navigate to the directory of your project that contains the `package.json` file. 
* Run the command `npm run dev` (this may vary based on scripts' specifics in your `package.json` scripts). 

 Click on Home to access Candidate Search. In Home: 
     * View Candidate information.
     * Click '+' button to save the candidate as a potential candidate and move to next available candidate.
     * Click the '-' button to move to the next candidate.

Click on Potential Candidates to access saved candidates. On this page: 
     * View Candidates saved from Candidate Search.
     * Click '-' button to remove candidate from potential candidate list. 
    


    

## License

This project includes the MIT License.

## Contributions

This project was quite a challenge for me and I received  a great deal of assistance from the Xpert Learning Assistant tool available through my Columbia Engineering Bootcamp account. This tool helped guide me through some difficulties, including error handling, conditional logic and evaluating code quality. I also received additional assistance from ChatGPT on correcting typescript logic, implementing arrays in order to add and remove candidates from local storage, connecting to the server, and how to piece the all the functionality together.

I also received assistance from my tutor for this project (name can be noted once permission is granted) to guide me through logic of accessing the Githib API and how to render information from the API onto the page.

 This repository is available to the public. Please feel free to clone this repository, submit a pull request, and add any issues. You can contact me via GitHub or email!

* [Link to Candidate Search repository](https://github.com/shukikat/Candidate-Search)

* [My Email](mailto:kathuriashuki@gmail.com)


## Tests

Example Test Cases:

On Home Page (Candidate Search):
* Click '+' or '-' button and ensure you are moved to the next candidate.
* Click '+' and ensure that candidate information is saved to local storage.
* Click '-' and ensure that candidate is not saved to local storage.


On Potential Candidate page:
* Candidates saved on home page display on table.
* Candiates who were not saved do not display on table.
* Click on '-' in row and ensure that candidate is removed from table and local storage.



