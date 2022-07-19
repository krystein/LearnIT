import React, { useState } from "react";
import Final from './components/index';
import GlobalStyle from "./globalstyles";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
      <GlobalStyle />
      <Final isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default App;
