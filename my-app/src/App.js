import React from 'react';
import Contact from './components/Contact';
// import Avatar from './components/Avatar';

// const bart = {
//   image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
//   firstName: "Bart",
//   lastName: "Simpson"
// };

// const homer = {
//   image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
//   firstName: "Homer",
//   lastName: "Simpson"
// };

function App() {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/96.jpg"
        name="Terry Jones" online
        />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/97.jpg"
        name="Ethan Therence" 
        />
      {/* <Avatar /> */}
      {/* <Avatar {...homer}/> */}
    </div>
  );
}

export default App;
