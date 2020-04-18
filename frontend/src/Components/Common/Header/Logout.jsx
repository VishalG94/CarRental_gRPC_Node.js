import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Logout extends Component {

	render() {
		localStorage.clear();
		this.props.history.push('/');
		//console.log("from logout.js")
		//this.props.onSignOUt();
		let RedirectVar = <Redirect to="/" />;
		return (
			<div>
				<h1>hellooooo</h1>
				{/* {RedirectVar} */}
				{/* <Redirect to="/user" /> */}


			</div>
		);
	}
}
export default Logout;
