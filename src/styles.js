import styled from 'styled-components';

export const Body = styled.div`
	
	display: flex;
	flex-direction: column;
	background-color: #FFF;
	margin-left: 15%;
	margin-right: 15%;
	margin-top: 5%;
	padding: 3%;
	font-family:Helvetica;
`;

export const Topo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #009DFF;
	margin-bottom: 4%;
`;
export const Title = styled.h1`
	
	font-size: 1.5em;
	border-bottom: 5px solid #009DFF;
`;

export const Filter = styled.h1`
	
	color: #A4A4A4;
	font-size: 1em;
	span:{
		color : #009DFF;
	};
`;
