import React from 'react';
import {Item,Manchete,Info,Source} from './stylesComp';
import Moment from 'react-moment';

const News = (props) => (
	<Item>
		<Manchete>{props.manchete}</Manchete>
			<Info>
			<Moment format="DD/MM/YYYY">{props.date}</Moment>
			<Source>{props.source}</Source>
			</Info>
	</Item>
);

export default News;