import React, {Component} from 'react';
//import {load} from '../service/acesso.api';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loadActions from './actions/Load';
import {Item,Manchete,Info,Source} from './stylesComp'


class ListNews extends Component{

	constructor(props){

		super(props)
		this.state = {
			qtd: 0,
			news: []
		}
	}
 
	render() {
		return (
		<div>
			<Item>
				<Manchete>Manchete</Manchete>
				<Info><p>00/00/0000</p><Source>Fonte</Source></Info>
			</Item>
			<Item>
				<Manchete>Manchete</Manchete>
				<Info><p>00/00/0000</p><Source>Fonte</Source></Info>
			</Item><Item>
				<Manchete>Manchete</Manchete>
				<Info><p>00/00/0000</p><Source>Fonte</Source></Info>
			</Item>
			
		</div>
		);
	}
}
const mapDispatchToProps = dispatch => bindActionCreators(loadActions, dispatch);
export default connect(null, mapDispatchToProps)(ListNews);