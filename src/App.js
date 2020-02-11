import React from 'react';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {getArticles} from './api';

function App() {

  const [articles, setArticles] = React.useState([]);
  const [source, setSource] = React.useState(null);

  React.useEffect(() => {

    var params = {};

    if(source && source.value != 'all'){
      params.sources = source.value;
    }
    getArticles(params).then(res => {
        setArticles(res.data.articles);
    });
  }, [source, setArticles]);

  return (
    <div>
      <Header onSourceChanged={(s) => setSource(s)}/>

      <section>
        <ArticleList articles={articles}></ArticleList>
      </section>
    </div>
  );
}

export default App;
