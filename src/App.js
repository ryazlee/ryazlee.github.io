import React from 'react';
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Frame from './components/Frame.js'
import './styles.css';

function App() {
  return (
    <div>
      <Frame />
      <div className="center">
        <div className="landing">
          <Main/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
