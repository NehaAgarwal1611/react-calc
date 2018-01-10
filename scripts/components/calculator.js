import React, { Component } from 'react';

export default class Calculator extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className = 'calculator'>
				<div className = 'keys'>
					<div className = 'functionKeys'>
						<button className = 'clearButton' onClick = {this.props.clearLastIndex}>C</button>
						<button className = 'signButton' onClick = {this.props.showNegative}>±</button>
						<button className = 'percentButton' onClick = {this.props.percentValue}>%</button>
					</div>
					<div className = 'numbers'>
						<button className = 'digit-9' onClick = {this.props.enterDigit}>9</button>
						<button className = 'digit-8' onClick = {this.props.enterDigit}>8</button>
						<button className = 'digit-7' onClick = {this.props.enterDigit}>7</button>
						<button className = 'digit-6' onClick = {this.props.enterDigit}>6</button>
						<button className = 'digit-5' onClick = {this.props.enterDigit}>5</button>
						<button className = 'digit-4' onClick = {this.props.enterDigit}>4</button>
						<button className = 'digit-3' onClick = {this.props.enterDigit}>3</button>
						<button className = 'digit-2' onClick = {this.props.enterDigit}>2</button>
						<button className = 'digit-1' onClick = {this.props.enterDigit}>1</button>
						<button className = 'digit-0' onClick = {this.props.enterDigit}>0</button>
						<button className = 'dot' onClick = {this.props.enterDot}>.</button>
						<button className = 'allClearButton' onClick = {this.props.clearData}>AC</button>
					</div>
				</div>
				<div className = 'operations'>
					<button className = 'divide' value={"divide"} onClick = {this.props.handleOperations}>/</button>
					<button className = 'multiply' value={"multiply"} onClick = {this.props.handleOperations}>*</button>
					<button className = 'subtract' value={"substract"} onClick = {this.props.handleOperations}>-</button>
					<button className = 'add' value={"add"} onClick = {this.props.handleOperations}>+</button>
					<button className = 'equalTo' value={"equaltTo"} onClick = {this.props.handleOperations}>=</button>
				</div>
			</div>
		)
	}
}