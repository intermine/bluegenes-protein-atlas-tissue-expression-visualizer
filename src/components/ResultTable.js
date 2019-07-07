import React from 'react';
import ResultRow from './ResultRow';
import { STRENGTHS } from '../constants';

function calculateOverallStrength(cells) {
	let totalStaining = 0;
	cells.forEach(cell => (totalStaining += STRENGTHS[cell.level]));
	return Math.floor(totalStaining / cells.length);
}

class ResultTable extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<table cellSpacing={8}>
				<thead>
					<tr>
						<th>Overall</th>
						<th>Organ</th>
						<th>Cells</th>
						<th>Antibody Staining</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(data).map(key => (
						<ResultRow
							key={key}
							organName={key}
							cells={data[key]}
							overall={calculateOverallStrength(data[key])}
						/>
					))}
				</tbody>
			</table>
		);
	}
}

export default ResultTable;
