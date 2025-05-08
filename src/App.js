import React from 'react';
import { use100vh } from 'react-div-100vh'
import Main from './components/Main.js'
import Footer from './components/layout/Footer.js'
import Frame from './components/layout/Frame.js'
import Header from './components/layout/Header.js'
import Projects from './components/Projects.js'
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Frame />
      <Header />
      <div className="screen">
        <div className="center" style={{ minHeight: use100vh() }}>
          <div className="landing">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
