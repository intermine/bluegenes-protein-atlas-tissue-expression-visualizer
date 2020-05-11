import { STRENGTHS } from '../constants';

export default function calculateOverallStrength(cells) {
	let totalStaining = 0;
	cells.forEach(cell => (totalStaining += STRENGTHS[cell.level]));
	return Math.floor(totalStaining / cells.length);
}