import React, {Component} from 'react';

class Keypad extends Component{
	render(){
		return(
			<div>
				<button name = "(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> ( </button>
				<button name = "CE" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> CE </button>
				<button name = ")" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> ) </button>
				<button name = "C" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> C </button>
				<button name = "√(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> √ </button>
				<br/>
				<button name = "sin(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> sin </button>
				<button name = "cos(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> cos </button>
				<button name = "tan(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> tan </button>
				<button name = "ln(" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> ln </button>
				<button name = "+" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> + </button>
				<br/>
				<button name = "1" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 1 </button>
				<button name = "2" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 2 </button>
				<button name = "3" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 3 </button>
				<button name = "4" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 4 </button>
				<button name = "-" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> - </button>
				<br/>
				<button name = "5" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 5 </button>
				<button name = "6" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 6 </button>
				<button name = "7" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 7 </button>
				<button name = "8" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 8 </button>
				<button name = "*" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> * </button>
				<br/>
				<button name = "=" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> = </button>
				<button name = "9" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 9 </button>
				<button name = "0" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> 0 </button>
				<button name = "." style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> . </button>
				<button name = "/" style = {buttonStyle} onClick={e => this.props.onClick(e.target.name)}> / </button>
				<br/>
				
			</div>
		);
	}
}

const buttonStyle = {
	width: '15%',
	height: 'px',
	fontSize: '30px'

}

export default Keypad;