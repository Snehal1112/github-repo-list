import { Alert } from '@blueprintjs/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRepoList } from '../actions/RepoListAction';
import RepoSearchTextField from '../components/RepoSearchTextField';
import RepoList from './RepoList';

class Repositorys extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		};
	}
	onChangeTextField = (event) => {
		clearTimeout(this.timer);
		this.timer = setTimeout(
			(target) => {
				if (target.value.length !== 0) {
					this.props.getRepoList(target.value);
				}
			},
			500,
			event.target
		);
	};

	render() {
		const { repos, error } = this.props;
		return error ? (
			<Alert
				confirmButtonText="Okay"
				isOpen={this.state.isOpen}
				onClose={() => {
					this.setState({ isOpen: false });
				}}
			>
				<p>{error.message}</p>
			</Alert>
		) : (
			<div className="App">
				<RepoSearchTextField onChange={this.onChangeTextField} />
				<RepoList repos={repos} />
			</div>
		);
	}
}

RepoList.defaultProps = {
	repos: {},
	error: undefined
};
const mapStateToProps = (state) => ({
	repos: state.repos.items,
	error: state.repos.error
});
export default connect(mapStateToProps, { getRepoList })(Repositorys);
