import React, {Component} from 'react';
import {Filter, Arrow, Menu} from './stylesComp';
import {getSource} from '../service/acesso.api';

class Dropdown extends Component{

	constructor(props){

		super(props)
		this.state = {
			qtd: 0,
			source: [],
			show: '',
			position: 'down',
		}
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	componentDidMount(props){
		getSource().then((res) => {this.setState({source: res.data.sources, qtd: res.data.sources.length})});

	}
		
	handleOnClick(){
		if(this.state.position === 'down'){
			this.setState({show: 'show', position: 'left'});
		}else{
			this.setState({show: '', position: 'down'});
		}
	}

	render() {
		return (
			<div className="dropdown" onClick={this.handleOnClick}>
				<Filter>Filtrar por fonte <Arrow className={`fas fa-caret-${this.state.position}`}></Arrow></Filter>
				<Menu className={`dropdown-menu ${this.state.show}`}>
					{this.state.source.map((s) => <li key={s.id} className="dropdown-item"><p>{s.name}</p></li>)}
				</Menu>
			</div>
		);
	}
}

export default Dropdown;