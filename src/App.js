import React, { Component } from 'react';
import './App.css';
import selfie from './slefie.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Hatem Boukhrouf",
        bio: "I am a beginner in React",
        profession: "Web Developer",
        imgSrc: selfie,
      },
      show: false,
      mountTime: new Date(),
      timeSinceMount: '00:00'
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const diff = now - this.state.mountTime; // difference in milliseconds
      
      // Convert to minutes and seconds
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      
      // Format as MM:SS
      const formattedTime = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      this.setState({ timeSinceMount: formattedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  shows = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { Person, show, timeSinceMount } = this.state;
    return (
      <div className="App">
        <button onClick={this.shows}>{show ? "Hide profile" : "Show profile"}</button>
        {show && (
          <div>
            <h1>{Person.fullName}</h1>
            <h2>{Person.bio}</h2>
            <h3>{Person.profession}</h3>
            <img src={Person.imgSrc} alt="selfie" />
          </div>
        )}
        <p>Time since mount: {timeSinceMount}</p>
      </div>
    );
  }
}

export default App;
