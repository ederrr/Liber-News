export function loadNews(qtd, sourceId){
	return{
		type: 'LOAD_NEWS',
		qtd,
		sourceId
	}
}