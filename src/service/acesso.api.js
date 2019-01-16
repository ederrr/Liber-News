import {http} from './http'

export const getNews = (id,qtd) => http.get(`top-headlines?sources=${id}&pageSize=${qtd}&apiKey=da758aa5931e46069cba8ee4fe96b7b6`);

export const getSource = () => http.get(`sources?apiKey=da758aa5931e46069cba8ee4fe96b7b6`);