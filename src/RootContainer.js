import React from 'react';
import queryData from './queryData';
import ResultTable from './components/ResultTable';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			error: null,
			loading: true
		};
	}

	componentDidMount() {
		const {
			serviceUrl,
			entity: { value }
		} = this.props;

		queryData(value, serviceUrl)
			.then(res => {
				const map = new Map();
				res.proteinAtlasExpression.forEach(r => {
					const cells = map.get(r.tissue.tissueGroup.name) || [];
					cells.push(r);
					map.set(r.tissue.tissueGroup.name, cells);
				});
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		return (
			<div className="rootContainer">
				<p className="title">Protein Atlas Tissue Expression</p>
				{this.state.error ? (
					<div className="error">{this.state.error}</div>
				) : (
					<ResultTable data={this.state.data} />
				)}
			</div>
		);
	}
}

export default RootContainer;
