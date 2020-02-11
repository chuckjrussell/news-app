import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {

    return (
        <ul class="list-group list-group-flush">
            {articles.map((a, idx) => <li class="list-group-item" key={idx}><ArticleListItem item={a}/></li>)}
        </ul>)
}

export default ArticleList;