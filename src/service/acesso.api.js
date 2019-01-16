import {http} from './http'

export const getNews = (id) => http.get(`top-headlines?sources=${id}&apiKey=58d1b7053a0e4a4dbc7d106472ef4f57`);

export const getSource = () => http.get(`sources?apiKey=58d1b7053a0e4a4dbc7d106472ef4f57`);