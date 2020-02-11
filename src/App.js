import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NEWS!
      </header>

      <section>
        <ArticleList></ArticleList>
      </section>
    </div>
  );
}

export default App;
