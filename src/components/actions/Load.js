export function LoadNews(qtd, news){
	return{
		type: 'LOAD_NEWS',
		qtd,
		news
	}
}