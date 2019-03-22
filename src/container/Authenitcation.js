import { Button, Classes, InputGroup, Intent, Tooltip } from '@blueprintjs/core';
import React, { Component } from 'react';

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '-webkit-fill-available'
	},
	textField: {
		minWidth: 400,
		maxWidth: 600
	}
};

class Authenitcation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false
		};
	}
	handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

	onChangeAccesstoken = (event) => {
		clearTimeout(this.timer);
		this.timer = setTimeout(
			(target) => {
				const { value } = target;
				if (value.length !== 0) {
					// TODO: encrypt the token and then store it to session storage.
                    sessionStorage.setItem('accesstoken', value);
                    this.props.state({'accesstoken' : value})
				}
			},
			500,
			event.target
		);
	};
	render() {
		const { showPassword } = this.state;
		const lockButton = (
			<Tooltip content={`${showPassword ? 'Hide' : 'Show'} Access token`}>
				<Button
					icon={showPassword ? 'unlock' : 'lock'}
					intent={Intent.WARNING}
					minimal={true}
					onClick={this.handleLockClick}
				/>
			</Tooltip>
		);
		return (
			<div style={styles.container}>
				<InputGroup
					className={`${Classes.DARK} bp3-round`}
					style={styles.textField}
					large="true"
					type={showPassword ? 'text' : 'password'}
					rightElement={lockButton}
					onChange={this.onChangeAccesstoken}
					placeholder="User access token..."
				/>
			</div>
		);
	}
}

export default Authenitcation;
