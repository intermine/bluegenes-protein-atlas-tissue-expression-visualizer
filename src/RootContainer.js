import React from 'react';
import queryData from './queryData';
import ResultTable from './components/ResultTable';

class RootContainer extends React.Component {
	componentDidMount() {
		const {
			serviceUrl,
			entity: { value }
		} = this.props;

		queryData(value, serviceUrl).then(res => {
			const map = new Map();
			res.proteinAtlasExpression.forEach(r => {
				const cells = map.get(r.tissue.tissueGroup.name) || [];
				cells.push(r);
				map.set(r.tissue.tissueGroup.name, cells);
			});
		});
	}

	render() {
		return (
			<div className="rootContainer">
				<p className="title">Protein Atlas Tissue Expression</p>
				<ResultTable />
			</div>
		);
	}
}

export default RootContainer;
