import styled from 'styled-components';

export const Body = styled.div`
	
	display: flex;
	flex-direction: column;
	background-color: #FFF;
	margin-left: 15%;
	margin-right: 15%;
	margin-top: 5%;
	padding: 4%;
	font-family:Helvetica;
	border: 1px solid #DDD;
`;

export const Topo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #009DFF;
	margin-bottom: 6%;
`;
export const Title = styled.h1`
	
	font-size: 2em;
	border-bottom: 5px solid #009DFF;
`;

export const Button = styled.div`
	
	border-radius: 5px;
	font-size: 0.9em;
	text-align: center;
	width: 20%;
	padding-top:3px;
	padding-bottom:3px;
	margin-top: 8%;
	background-color: #009DFF;
	color: #FFF;
`;