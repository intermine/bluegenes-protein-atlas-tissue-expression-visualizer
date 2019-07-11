import React from 'react';

const STRENGTH_COLORS = ['#BE463A', '#F09F4C', '#FCEC9A', '#FFFFFF'].reverse();

function HeatBox({ organName, strength, noTooltip }) {
	return (
		<div
			style={{
				width: 22,
				height: 16,
				marginRight: 2,
				background: STRENGTH_COLORS[strength || 0],
				border: '0.5px solid black'
			}}
			className={!noTooltip ? 'tooltip' : ''}
		>
			{!noTooltip && <span className="tooltiptext">{organName}</span>}
		</div>
	);
}
export default HeatBox;
