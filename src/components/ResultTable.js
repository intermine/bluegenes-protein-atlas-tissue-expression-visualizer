import React from 'react';
import ResultRow from './ResultRow';
import calculateOverallStrength from '../utils/calculateOverallStrength';

class ResultTable extends React.Component {
	render() {
		const { handleSort, data, sortedBy } = this.props;
		const arrow = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="15"
				height="15"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="feather feather-chevron-up"
			>
				<polyline points="18 15 12 9 6 15"></polyline>
			</svg>
		);

		return (
			<table cellSpacing={8}>
				<thead>
					<tr>
						<th className="overall" onClick={handleSort}>
							<span
								className={
									'arrow' +
									(sortedBy === 'overallExpression' ? ' rotated180' : '')
								}
							>
								{arrow}
							</span>
							Overall
						</th>
						<th className="organ" onClick={handleSort}>
							<span
								className={
									'arrow' + (sortedBy === 'organName' ? ' rotated180' : '')
								}
							>
								{arrow}
							</span>
							Organ
						</th>
						<th className="cells" onClick={handleSort}>
							<span
								className={
									'arrow' + (sortedBy === 'cellAmount' ? ' rotated180' : '')
								}
							>
								{arrow}
							</span>
							Cells
						</th>
						<th>Antibody Staining</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(data).map((key) => (
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
