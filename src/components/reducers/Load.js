export default function load(state = [], action){

	switch(action.type){
		case 'LOAD_NEWS':
			return { sourceId: action.sourceId}

		default:
			return state;
	}
	
}