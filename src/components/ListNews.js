import React, {Component} from 'react';
import {getNews} from '../service/acesso.api';
import News from './News';
import {connect} from 'react-redux';
import {Button} from './stylesComp';

class ListNews extends Component{

	constructor(props){
		super(props)
		this.state = {
			news: [],
			qtd: 5
		}
		this.showMore = this.showMore.bind(this);
	}
	componentWillReceiveProps(nextProps){
		getNews(nextProps.sourceId, 5).then((res) => {this.setState({news: res.data.articles, qtd: 5})});
	}

	showMore(){
		getNews(this.props.sourceId, this.state.qtd+5).then((res) => {this.setState({news: res.data.articles, qtd: this.state.qtd+5})});
	}

	render() {
		return (
		<div>
			{this.state.news.map((news, i) =>{return <News key={i} manchete={news.title} date={news.publishedAt} source={news.source.name}   />})}
			<Button onClick={this.showMore}>Mostrar mais</Button>		
		</div>
		);
	}
}

const mapStateToProps = state => ({
	sourceId: state.sourceId
});

export default connect(mapStateToProps) (ListNews);