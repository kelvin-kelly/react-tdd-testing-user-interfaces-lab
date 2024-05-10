

// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hi, I'm Kelvin Machira</h1>
//       <img src="https://via.placeholder.com/100" alt="Kelvin Machira" />
//       <h2>About Me</h2>
//       <p>I am currently a student in Moringa school, aspiring to be a competent Back-end Developer</p>
//       <a href="https://github.com/kelvin-kelly">GitHub</a>
//       <a href="https://www.linkedin.com/comm/in/kelvin-machira-2180362bb?midToken=AQE_ZmsdZ-scUA&midSig=25gZNEQWcuWbc1&trk=eml-email_next_best_action_digest_01-header-58-profile&trkEmail=eml-email_next_best_action_digest_01-header-58-profile-null-la9k8k%7Elvfbwxa1%7Ec2-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_email_next_best_action_digest_01%3B%2FlyykcPPQt%2BOdNrbEnbyeg%3D%3D">LinkedIn</a>
//     </div>
//   );
// }

// export default App;


import React from "react";

function App() {

  let name = "Kelvin Machira";
  let biography = "I am currently a student in Moringa school, aspiring to be a competent Back-end Developer";


  return (
    <div>
      <h1>Hi, I'm {name}</h1>
      <img src="https://via.placeholder.com/100" alt= {{name}} />
      <h2>About Me</h2>
      <p>{biography}</p>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>  
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default App;
