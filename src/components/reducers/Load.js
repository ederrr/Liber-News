export default function load(state = [], action){

	switch(action.type){
		case 'LOAD_NEWS':
			return {qtd: action.qtd, sourceId: action.sourceId}

		default:
			return state;
	}
	
}