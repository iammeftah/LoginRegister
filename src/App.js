import React, { useState } from 'react';
import Register from "./components/Register";
import Particles from "./components/Particles";
import Ring from './components/Ring';
import Form from "./components/Form";
import TransitionContainer from './components/TransitionContainer';
import './App.css';

function App() {
  const [showRegister, setShowRegister] = useState(true);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left side of the screen */}
      <div className="flex-1 flex flex-col justify-center items-center relative">
        <TransitionContainer
          isVisible={!showRegister}
          transitionClassNames="slide"
        >
          <Form toggleForm={toggleForm} />
        </TransitionContainer>
        <TransitionContainer
          isVisible={showRegister}
          transitionClassNames="scale"
        >
          <Particles />
        </TransitionContainer>
      </div>

      {/* Right side of the screen */}
      <div className="flex-1 flex flex-col justify-center items-center bg-black-400 relative">
        <TransitionContainer
          isVisible={showRegister}
          transitionClassNames="slide"
        >
          <Register toggleForm={toggleForm} />
        </TransitionContainer>
        <TransitionContainer
          isVisible={!showRegister}
          transitionClassNames="scale"
        >
          <Ring />
        </TransitionContainer>
      </div>
    </div>
  );
}

export default App;