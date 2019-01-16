import React, {Component} from 'react';
import {getNews} from '../service/acesso.api';
import News from './News';
import {connect} from 'react-redux';

class ListNews extends Component{

	constructor(props){
		super(props)
		this.state = {
			news: [],
			show: 5,
			source: 'axios'
		}
	}

	componentWillReceiveProps(nextProps){
		getNews(nextProps.sourceId).then((res) => {this.setState({news: res.data.articles, qtd: res.data.articles.length})});
		
	}

	render() {
		return (
		<div>
			{this.state.news.map((news, i) =>{return <News key={i} manchete={news.title} date={news.publishedAt} source={news.source.name}   />})}		
		</div>
		);
	}
}

const mapStateToProps = state => ({
	qtd: state.qtd,
	sourceId: state.sourceId
});

export default connect(mapStateToProps) (ListNews);