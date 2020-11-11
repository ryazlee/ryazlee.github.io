import React from 'react';
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Frame from './components/Frame.js'
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Frame />
      <Header />
      <div className="scroller">
        <section>
          <div className="center">
            <div className="landing">
              <Main />
              <Footer />
            </div>
          </div>
        </section>
        {/* WIP....
        <section>
          <div className='center'>
            <Projects />
          </div>
        </section>
        */}
      </div>
    </div>
  );
}

export default App;
