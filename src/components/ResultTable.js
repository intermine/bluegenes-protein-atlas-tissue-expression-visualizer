import React from 'react';
import ResultRow from './ResultRow';

class ResultTable extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<table cellSpacing={8}>
				<tbody>
					{Object.keys(data).map(key => (
						<ResultRow key={key} organName={key} cells={data[key]} />
					))}
				</tbody>
			</table>
		);
	}
}

export default ResultTable;
