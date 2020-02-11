import axios from 'axios';

export function getArticles(filters){
    console.log(filters);
    return axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            ...filters,
            language: 'en',
            apiKey: process.env.REACT_APP_NEWS_API_KEY
        }
      })
}

export function getSources(){
    return axios.get('https://newsapi.org/v2/sources', {
        params: {
            apiKey: process.env.REACT_APP_NEWS_API_KEY
        }
      })
}

