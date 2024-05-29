import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <h1>Welcome to My Portfolio</h1>
        {/* Add more components here */}
      </main>
      <Header />
    </div>
  );
};

export default App;
