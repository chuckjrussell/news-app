import React from 'react';

const ArticleListItem = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <div>{item.author}</div>
            <div>{item.description}</div>
            <a href={item.url}>Read More</a>
        </div>
    )
}

export default ArticleListItem;