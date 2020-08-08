import React, {Component} from 'react';
import Display from './Components/Display'
import Keypad from './Components/Keypad'
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
		result: '',
		funcExpr: '',
		funcLen: 0,
		funcActive: false,
		sinActive: false,
		cosActive: false,
		tanActive: false,
		lnActive: false,
		sqrtActive: false
	}
  }

  evaluate = () => {
	this.setState({
        result: eval(this.state.result)
    })
  }

  back = () => {
	this.setState({
        result: this.state.result.slice(0,-1)
    })
  }

  clear = () => {
  	this.setState({
        result: ''
    })
  }

  onClick = key => {
  	if(this.state.funcActive === true){
  		console.log('funcActive')
		this.setState({
	        result: this.state.result + key, 
	        funcExpr: this.state.funcExpr + key,
	        funcLen: this.state.funcLen + 1
	    })
	    if(key === ')'){
	    	this.setState({
	    		funcExpr: eval(this.state.funcExpr),
	    		result: this.state.result.slice(0,(this.state.funcLen*-1))
	    	})
			let replace = 0;
			if(this.state.sinActive){
				replace = Math.sin(this.state.funcExpr)
			}
			else if(this.state.cosActive){
				replace = Math.cos(this.state.funcExpr)
			}
			else if(this.state.tanActive){
				replace = Math.tan(this.state.funcExpr)
			}
			else if(this.state.lnActive){
				replace = Math.log(this.state.funcExpr)
			}
			else if(this.state.sqrtActive){
				replace = Math.sqrt(this.state.funcExpr)
			}
			this.setState({
				result: this.state.result.slice(0,((this.state.funcLen*-1)-1))+ replace,
				sinActive: false,
				funcActive: false,
				funcLen: 0,
				funcExpr: ''
			})
	    }
  	}
  	else{
	  	if(key === '='){
	  		this.evaluate()
	  	}
	  	else if(key === 'CE'){
	  		this.back()
	  	}
	  	else if(key === 'C'){
	  		this.clear()
	  	}
	  	else{
	  		if(key === 'sin('){
	  			this.setState({
		            result: this.state.result + key,
		            sinActive: true,
		            funcActive: true,
		            funcLen: 3
	        	})
	  		}
	  		else if(key === 'cos('){
		  		this.setState({
		  			result: this.state.result + key,
		            cosActive: true,
		            funcActive: true,
		            funcLen: 3
		        })
	  		}
	  		else if(key === 'tan('){
		  		this.setState({
		  			result: this.state.result + key,
		            tanActive: true,
		            funcActive: true,
		           	funcLen: 3
		        })
	  		}
	  		else if(key === 'ln('){
		  		this.setState({
		  			result: this.state.result + key,
		            lnActive: true,
		            funcActive: true,
		            funcLen: 2
		        })
	  		}
	  		else if(key === '√('){
		        this.setState({
					result: this.state.result + key,
		            sqrtActive: true,
		            funcActive: true,
		           	funcLen: 1
		        })
	  		}
	  		else{
	  			this.setState({
		            result: this.state.result + key
	        	})
	  		}
	  	}
	  }
  }

  render(){
    return (
      <div className="App">
        <h1> Scientific Calculator </h1>
        <Display result = {this.state.result}/>
        <Keypad onClick = {this.onClick}/>
      </div>
    );
  }
}

export default App;
