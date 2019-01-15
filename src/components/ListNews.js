import React, {Component} from 'react';
import {getNews} from '../service/acesso.api';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loadActions from './actions/Load';
import News from './News';


class ListNews extends Component{

	constructor(props){

		super(props)
		this.state = {
			qtd: 0,
			news: [],
			show: 5
		}
	}
	componentDidMount(props){
		getNews('cnn').then((res) => {this.setState({news: res.data.articles, qtd: res.data.articles.length})});

	}
	render() {
		return (
		<div>
			{this.state.news.map((news, i) =>{return <News key={i} manchete={news.title} date={news.publishedAt} source={news.source.name}   />})}		
		</div>
		);
	}
}
const mapDispatchToProps = dispatch => bindActionCreators(loadActions, dispatch);
export default connect(null, mapDispatchToProps)(ListNews);