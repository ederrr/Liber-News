import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './components/Store';
import {Title,Filter,Topo,Body} from './styles';
import ListNews from './components/ListNews'

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<Body>
					<Topo>
					<Title>Notícias</Title>
					<Filter>Filtrar por fonte <span className="fas fa-caret-down"></span></Filter>
					</Topo>
					<ListNews />
				</Body>
			</Provider>
		);
	}
}

export default App;
