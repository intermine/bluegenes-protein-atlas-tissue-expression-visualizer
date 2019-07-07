import React from 'react';
import HeatBox from './HeatBox';

const STRENGTHS = {
	'Not Detected': 0,
	Low: 1,
	Medium: 2,
	High: 3
};

function ResultRow({ organName, cells = [] }) {
	return (
		<tr className="result-row-container">
			<td className="item">
				<HeatBox />
			</td>
			<td className="item" title={organName}>
				{organName}
			</td>
			<td className="item">{cells.length}</td>
			<td className="item">
				{cells.map((c, i) => (
					<HeatBox key={i} strength={STRENGTHS[c.level]} />
				))}
			</td>
		</tr>
	);
}

export default ResultRow;
