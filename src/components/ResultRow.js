import React from 'react';
import HeatBox from './HeatBox';

function ResultRow() {
	return (
		<tr className="result-row-container">
			<td className="item">
				<HeatBox />
			</td>
			<td className="item">
				Digestive tractDigestive tractDigestive tractDigestive
			</td>
			<td className="item">10</td>
			<td className="item">
				<HeatBox />
				<HeatBox />
				<HeatBox />
			</td>
		</tr>
	);
}

export default ResultRow;
