import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './components/Store';
import {Title,Topo,Body, Button} from './styles';
import ListNews from './components/ListNews'
import Dropdown from './components/Dropdown';

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<Body>
					<Topo>
					<Title>Notícias</Title>
					<Dropdown />
					</Topo>
					<ListNews />
					<Button>Mostrar mais</Button>
				</Body>
			</Provider>
		);
	}
}

export default App;
