import React, { Component } from 'react'

export default class About extends Component {
	componentDidMount() {
		this.props.handleToolbarNavItems([])
	}
		
	render() {
		return (
			<div>
				Hi im a react-dhx components system
			</div>
		)
	}
}
