import React from 'react';
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Frame from './components/Frame.js'
import Header from './components/Header.js'
import './styles.scss';

function App() {
  return (
    <div>
      <Frame />
      <Header />
      <div className="center">
        <div className="landing">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
