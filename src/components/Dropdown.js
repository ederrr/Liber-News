import React, {Component} from 'react';
import {Filter, Arrow, Menu} from './stylesComp';
import {getSource} from '../service/acesso.api';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loadActions from './actions/Load';

class Dropdown extends Component{

	constructor(props){

		super(props)
		this.state = {
			source: [],
			sourceId: 'cnn',
			show: '',
			position: 'down',
		}
		this.handleShow = this.handleShow.bind(this);
	}
	componentDidMount(props){
		this.props.loadNews(this.state.sourceId);
		getSource().then((res) => {this.setState({source: res.data.sources, sourceQtd: res.data.sources.length})});
	}
		
	handleShow(){
		if(this.state.position === 'down'){
			this.setState({show: 'show', position: 'left'});
		}else{
			this.setState({show: '', position: 'down'});
		}
	}


	render() {
		return (
			<div className="dropdown" onClick={this.handleShow}>
				<Filter>Filtrar por fonte <Arrow className={`fas fa-caret-${this.state.position}`}></Arrow></Filter>
				<Menu className={`dropdown-menu ${this.state.show}`}>
					{this.state.source.map((s) => <li key={s.id} className="dropdown-item" onClick={()=>this.props.loadNews(s.id )} ><p>{s.name}</p></li>)}
				</Menu>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(loadActions, dispatch);
export default connect(null, mapDispatchToProps)(Dropdown);