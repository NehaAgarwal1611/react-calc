import React, { Component } from 'react';

export default class DisplayValue extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className = 'displayValue' id='display'>
				<p>{this.props.displayValue}</p>
			</div>
		)
	}
}