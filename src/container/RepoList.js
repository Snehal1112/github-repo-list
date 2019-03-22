import React, { Component } from 'react';
import RepoCard from '../components/RepoCard';
import './RepoList.scss';

class RepoList extends Component {
	render() {
		const { repositories = [] } = this.props.repos;
		return (
			<div className="repoContainer">
				{repositories.map((repo, index) => {
					return <RepoCard key={index} repo={repo} />;
				})}
			</div>
		);
	}
}

export default RepoList;
