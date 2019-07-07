import React from 'react';
import HeatBox from './HeatBox';

function ResultRow({ organ, cellTypes }) {
	return (
		<tr className="result-row-container">
			<td className="item">
				<HeatBox />
			</td>
			<td className="item" title={organ}>
				{organ}
			</td>
			<td className="item">{cellTypes}</td>
			<td className="item">
				<HeatBox />
				<HeatBox />
				<HeatBox />
			</td>
		</tr>
	);
}

export default ResultRow;
