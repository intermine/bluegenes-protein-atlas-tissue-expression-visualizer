import React from 'react';

const STRENGTH_COLORS = ['#FFFFFF', '#FCEC9A', '#F09F4C', '#BE463A'];

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
			className={!noTooltip ? 'atlas-tooltip' : ''}
		>
			{!noTooltip && <span className="tooltiptext">{organName}</span>}
		</div>
	);
}
export default HeatBox;
