import React from 'react';
import Header from './header';
import DisplayValue from './displayValue';
import Calculator from './calculator';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			output: 0,
			displayValue: '',
			maxLength: 30,
			waiting: '',
			operator: null
		};
		this.operation = {
			'add': function(prev, next) {return prev + next;},
			'subtract': function(prev, next) {return prev - next;},
			'divide': function(prev, next) {return prev / next;},
			'multiply': function(prev, next) {return prev * next;}
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
		this.setState({
			displayValue: this.state.displayValue + e.target.textContent || e.target.textContent
		})
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
		const memory = parseFloat(this.state.displayValue);
		this.operation = this.operation[e.target.className];
		// switch(e.target.className) {
		// 	case 'divide':
		// 		console.log('divide');
		// 		break;
		// 	case 'multiply':
		// 		console.log('multiply');
		// 		break;
		// 	case 'subtract':
		// 		console.log('subtract');
		// 		break;
		// 	case 'add':
		// 		console.log('add');
		// 		console.log(this.state.memory);
		// 		break;
		// 	case 'equalTo':
		// 		console.log('equalTo');
		// 		break;
		// 	default:
		// 		break;
		// }
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

