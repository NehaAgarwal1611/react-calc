import React from 'react';
import Header from './header';
import DisplayValue from './displayValue';
import Calculator from './calculator';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			displayValue: '',
			operator: undefined,
			memory: 0,
			waitingForOperand: false
		};
		this.calculateOutput = {
			'add': function(prev, next) {return prev + next;},
			'subtract': function(prev, next) {return prev - next;},
			'divide': function(prev, next) {return prev / next;},
			'multiply': function(prev, next) {return prev * next;},
			'equalTo': function(prev, next) {return next}
		};
		this.enterDigit = this.enterDigit.bind(this);
		this.clearData = this.clearData.bind(this);
		this.percentValue = this.percentValue.bind(this);
		this.showNegative = this.showNegative.bind(this);
		this.handleOperations = this.handleOperations.bind(this);
		this.enterDot = this.enterDot.bind(this);
		this.clearLastIndex = this.clearLastIndex.bind(this);
	}

	enterDigit(e) {
		const { displayValue, waitingForOperand } = this.state;
		if (waitingForOperand) {
      this.setState({
        displayValue: e.target.textContent,
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? e.target.textContent : this.state.displayValue + e.target.textContent
      })
    }
	}

	clearData(e) {
		this.setState({
			displayValue: ''
		})
	}

	clearLastIndex(e) {
		this.state.displayValue = this.state.displayValue.toString();
		this.setState({
			displayValue: this.state.displayValue.substring(0, this.state.displayValue.length - 1)
		})
	}

	enterDot(e) {
		if(this.state.displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: this.state.displayValue + e.target.textContent
			})
		}
	}

	showNegative(e) {
		if(this.state.displayValue > 0) {
			this.setState({
				displayValue: -Math.abs(this.state.displayValue)
			})
		} else {
			this.setState({
				displayValue: Math.abs(this.state.displayValue)
			})
		}
	}

	percentValue(e) {
		this.setState({
			displayValue: parseFloat(this.state.displayValue)/100
		})
	}

	handleOperations(e) {
		let { memory, displayValue, operator } = this.state;
		const prevValue = parseFloat(displayValue);	
		if(!memory) {
			this.setState({
				memory: prevValue
			})
		} else if(operator) {
			const currentValue = memory || 0;
      const newValue = this.calculateOutput[operator](currentValue, prevValue);
      
      this.setState({
        memory: newValue,
        displayValue: String(newValue)
      })
		}

		this.setState({
			operator: e.target.className,
			waitingForOperand: true
		})
	}

	componentDidMount() {
		console.log("Component Did Mount");
	}

	render() {
		return (
			<div className='app'> 
		    <Header />
		    <DisplayValue displayValue={this.state.displayValue} />
		    <Calculator enterDigit={this.enterDigit} clearData={this.clearData} percentValue={this.percentValue} showNegative={this.showNegative} handleOperations={this.handleOperations} enterDot={this.enterDot} clearLastIndex={this.clearLastIndex} />
	    </div>
		);
	}
}

