import React, {Component} from 'react';
import {Button} from './stylesComp';

class ButtonMais extends Component{

	render() {
		return (
			<Button onClick={this.props.showMore}>Mostrar mais</Button>
		);
	}
}

export default ButtonMais;