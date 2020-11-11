import React from 'react';

import useDarkMode from 'use-dark-mode';
import './styles.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  
  function getButton() {
    if (darkMode.value) {
      return <button type="button" onClick={darkMode.disable}>🌞</button>
    } else {
      return <button type="button" onClick={darkMode.enable}>🌚</button>
    }
  }

  return (
    <div className="dark-mode-toggle">
      {getButton()}
    </div>
  );
};

export default DarkModeToggle;
