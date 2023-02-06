import React from 'react';

import logo from './logo.svg';
import Button from './components/button/Button';

import './app.scss';

function App() {

const styles = {
container : 'cl__app__container',
}

  return (
    <div className={styles.container}>
    <h1> Component library coming soon </h1>
    <Button/>
    </div>
  );
}

export default App;
