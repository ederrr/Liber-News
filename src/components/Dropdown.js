import React, {Component} from 'react';
import {Filter, Arrow} from './stylesComp';
import {getSource} from '../service/acesso.api';

class Dropdown extends Component{

	constructor(props){

		super(props)
		this.state = {
            qtd: 0,
			source: [],
		}
	}
	componentDidMount(props){
		getSource().then((res) => {this.setState({source: res.data.sources, qtd: res.data.sources.length})});

	}
	render() {
		return (
    <div className="dropdown">
    <Filter>Filtrar por fonte <Arrow className="fas fa-caret-down"></Arrow></Filter>
    <ul className="dropdown-menu">
        {this.state.source.map((s) => <li key={s.id} className="dropdown-item"><p>{s.name}</p></li>)}
    </ul>
    </div>
);
}
}

export default Dropdown;