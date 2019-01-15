import {http} from './http'

export const getNews = (id) => http.get(`top-headlines?sources=${id}&apiKey=510c13ca54c24ff6828a2c3e687c3b7e`);

export const getSource = () => http.get(`sources?apiKey=510c13ca54c24ff6828a2c3e687c3b7e`);