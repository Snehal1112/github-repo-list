import { Button, Card, Classes, Elevation, H4, H5, Popover, Tooltip } from '@blueprintjs/core';
import React from 'react';

const style = {
	cardMargin: {
		marginRight: 10,
		marginBottom: 10,
		width: 300
	}
};

const RepoCard = (props) => {
	const { repo = {} } = props;
	return (
		<Card className={Classes.DARK} style={style.cardMargin} interactive={true} elevation={Elevation.TWO}>
			<H4>
				<span> Name : {repo.name}</span>
			</H4>
			<H5>Owner : {repo.owner}</H5>
			<Popover>
				<Tooltip content="Open Repository">
					<Button icon="folder-open" />
				</Tooltip>
			</Popover>
		</Card>
	);
};

export default RepoCard;
