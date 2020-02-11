import React from 'react';
import './ArticleListItem.css';

const ArticleListItem = ({item}) => {
    return (
        
        <a href={item.url}>
        <div className='row'>
            
            <div className='col-md-3'>
                <img src={item.urlToImage} className='list-item-image'/>
            </div>
            <div className='col-md-9'>
                <h2 className="h4 article-link-text">{item.title}</h2>
                <div className="article-link-text">{item.author}</div>
                <div className="article-link-text">{item.description}</div>
                <a href={item.url}>Read More</a>
            </div>
        </div>
        
        </a>
    )
}

export default ArticleListItem;