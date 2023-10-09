import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './css/style.css';
import { Homepage } from '../HomePage';

/**
 * Приложениеы
 * @returns компонент "Приложение"
 */
function App() {

  return (
    <>
      <Header />
      <div className="App">
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
