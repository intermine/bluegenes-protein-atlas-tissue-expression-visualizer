import React from 'react';
import queryData from './queryData';
import Loading from './components/Loading';
import ResultTable from './components/ResultTable';
import calculateOverallStrength from './utils/calculateOverallStrength';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedByOrganName: null,
			sortedByCellAmount: null,
			sortedByOverallExpression: null,
			data: null,
			error: null,
			loading: true,
			sortedBy: 'organName',
			table: []
		};

		this.handleSort = this.handleSort.bind(this);
	}

	handleSort(event) {
		switch (event.currentTarget.className) {
		case 'cells' :
			this.setState({ data: this.state.sortedByCellAmount, sortedBy: 'cellAmount' });
			break;
		case 'overall' :
			this.setState({ data: this.state.sortedByOverallExpression, sortedBy: 'overallExpression' });
			break;
		case 'organ' :
			this.setState({ data: this.state.sortedByOrganName, sortedBy: 'organName' });
			break;
		}
	}

	componentDidMount() {
		const {
			serviceUrl,
			entity: { value }
		} = this.props;

		queryData(value, serviceUrl)
			.then(res => {
				const map = {};
				const sortedByOrganMap = {};
				const sortedByCellMap = {};
				const sortedByOverallMap = {};

				res.proteinAtlasExpression.forEach(r => {
					const cells = map[r.tissue.tissueGroup.name] || [];
					cells.push(r);
					map[r.tissue.tissueGroup.name] = cells;
				});
				Object.keys(map)
					.sort()
					.forEach(key => {
						sortedByOrganMap[key] = map[key];
					});

				Object.keys(map)
					.sort((a, b) => {
						return map[b].length - map[a].length;
					})
					.forEach(key => {
						sortedByCellMap[key] = map[key];
					});

				Object.keys(map)
					.sort(
						(a, b) =>
							calculateOverallStrength(map[b]) -
							calculateOverallStrength(map[a])
					)
					.forEach(key => {
						sortedByOverallMap[key] = map[key];
					});

				this.setState({
					loading: false,
					data: sortedByOrganMap,
					sortedByOrganName: sortedByOrganMap,
					sortedByCellAmount: sortedByCellMap,
					sortedByOverallExpression: sortedByOverallMap
				});
			})
			.catch(error => this.setState({ error }));
	}

	render() {
		return (
			<div className="rootContainer">
				<p className="title">Protein Atlas Tissue Expression</p>
				{this.state.error ? (
					<div className="error">
						{this.state.error.message
							? 'Something went wrong!'
							: this.state.error}
					</div>
				) : this.state.loading ? (
					<Loading />
				) : (
					<ResultTable
						handleSort={this.handleSort}
						{...this.state}
					/>
				)}
			</div>
		);
	}
}

export default RootContainer;
