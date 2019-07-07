import React from 'react';
import ResultRow from './ResultRow';

class ResultTable extends React.Component {
	render() {
		return (
			<table>
				<ResultRow />
				<ResultRow />
			</table>
		);
	}
}

export default ResultTable;
