import { Classes, InputGroup } from '@blueprintjs/core';
import React from 'react';

const RepoSearchTextField = (props) => {
	return (
		<InputGroup
			className={`${Classes.DARK} bp3-round`}
			style={{
				minWidth: 400,
				maxWidth: 600
			}}
			large="true"
			leftIcon="search"
			onChange={props.onChange}
			placeholder="Search repository..."
		/>
	);
};
export default RepoSearchTextField;
