import React from 'react';
import axios from 'axios';
import ArticleListItem from './ArticleListItem';

const ArticleList = () => {

    const [articles, setArticles] = React.useState([]);

    axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            country:'us',
            apiKey: '96e7efbae84544aca2e40f5834bf2777'
        }
      }).then(res => {
          setArticles(res.data.articles);
      })

    return (
        <ul class="list-group list-group-flush">
            {articles.map((a, idx) => <li class="list-group-item" key={idx}><ArticleListItem item={a}/></li>)}
        </ul>)
}

export default ArticleList;