import React from 'react';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import SourceSelector from './SourceSelector';

function App() {
  return (
    <div>

      <Header/>

      <section>
        <ArticleList></ArticleList>
      </section>
    </div>
  );
}

export default App;
