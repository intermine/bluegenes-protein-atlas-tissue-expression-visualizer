import React from 'react';
import ResultRow from './ResultRow';

class ResultTable extends React.Component {
	render() {
		return (
			<table cellSpacing={8}>
				<ResultRow organ="Hello world" cellTypes={10} />
				<ResultRow
					organ="Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world"
					cellTypes={10}
				/>
			</table>
		);
	}
}

export default ResultTable;
