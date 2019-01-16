import styled from 'styled-components';

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	width: 100%;
	border-bottom: 2px solid #bbb;
`;

export const Manchete = styled.a`
	color: #4E4E4E;
	font-size: 17pt;
	font-weight:bold;
	margin-top: 2%;
	margin-bottom: 2%;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	color: #A4A4A4;
	
`;
export const Source = styled.p`
	
	border-radius: 4px;
	font-size: 0.9 em;
	padding: 0% 4% 0% 4%;

	margin-left:5%;
	background-color: #D8D8E4;
	color: #FFF;
	text-align: center;
`;
export const Filter = styled.h1`
	
	color: #A4A4A4;
	font-size: 1em;
`;

export const Arrow = styled.span`

	color : #009DFF;
`;

export const Menu = styled.ul`
	overflow-y : scroll;
	height: 500%;
	color : #009DFF;
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