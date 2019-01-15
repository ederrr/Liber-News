import {createStore} from 'redux';
import reducers from './reducers/Load'

const Store = createStore(reducers);

export default Store;