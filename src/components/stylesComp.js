import styled from 'styled-components';

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	width: 100%;
	border-bottom: 2px solid #bbb;
`;

export const Manchete = styled.h4`
	color: #4E4E4E;
	font-size: 1 em;	
	margin-top: 1%;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	color: #D8D8E4;
	
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