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
          console.log(res.data.articles);
          setArticles(res.data.articles)
      })

    return (
        <>
            {articles.map((a, idx) => <ArticleListItem item={a} key={idx}/>)}
        </>)
}

export default ArticleList;