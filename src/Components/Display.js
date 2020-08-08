import React, {Component} from 'react';

class Display extends Component{
	render(){
		let {result} = this.props;
		return(
			<h2>{result}</h2>
		);
	}
}

export default Display;