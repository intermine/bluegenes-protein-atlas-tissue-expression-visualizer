import React from 'react';
import HeatBox from './HeatBox';

function ResultRow() {
	return (
		<div className="result-row-container">
			<div className="item">
				<HeatBox />
			</div>
			<div className="item">Digestive tract</div>
			<div className="item">10</div>
			<div className="item">
				<HeatBox />
				<HeatBox />
				<HeatBox />
			</div>
		</div>
	);
}

export default ResultRow;
