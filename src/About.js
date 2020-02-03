import React, {Component} from "react";

export default class About extends Component {
	componentDidMount() {
		this.props.handleToolbarNavItems([]);
	}
	render() {
		return (
			<div style={{textAlign: "center"}}>
				{/* TODO: add more text or list of components */}
				<h1 style={{color: "rgba(0,0,0, 0.7)", fontWeight: "500"}}>DHX - react sample examples</h1>
			</div>
		);
	}
}
