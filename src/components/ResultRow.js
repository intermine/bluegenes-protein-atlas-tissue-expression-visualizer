import React from 'react';
import HeatBox from './HeatBox';
import { STRENGTHS } from '../constants';

function ResultRow({ organName, overall, cells = [] }) {
	// sort on basis of antibody staining
	cells = cells.sort((c1, c2) => STRENGTHS[c2.level] - STRENGTHS[c1.level]);
	return (
		<tr className="result-row-container">
			<td className="item">
				<HeatBox strength={overall} />
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
