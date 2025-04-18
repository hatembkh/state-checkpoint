import  { useState } from 'react';
import './App.css';
import selfie from './slefie.jpg';
function App() {
  const [Person] = useState({
    fullName: "Hatem Boukhrouf",
    bio: "I am a beginner in React",
    profession: "Web Developer",
    imgSrc: {selfie},
  });
  const [show, setShow] = useState(false);
  function shows(){ 
      return setShow(!show)
  }
  return (
    <div className="App">
      <button onClick={shows}>Show</button>
      {show && <div>
          <h1>{Person.fullName}</h1>
          <h2>{Person.bio}</h2>
          <h3>{Person.profession}</h3>
          <img src={selfie} alt="selfie" />
        </div>}
    </div>
  );
}

export default App;
