import React from 'react';
import './ArticleListItem.css';

const ArticleListItem = ({item}) => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <img src={item.urlToImage} className='list-item-image'/>
            </div>
            <div className='col-md-9'>
                <h2 class="h4">{item.title}</h2>
                <div>{item.author}</div>
                <div>{item.description}</div>
                <a href={item.url}>Read More</a>
            </div>
        </div>
    )
}

export default ArticleListItem;