import React from 'react';
import queryData from './queryData';
import Loading from './components/Loading';
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
				const map = {};
				res.proteinAtlasExpression.forEach(r => {
					const cells = map[r.tissue.tissueGroup.name] || [];
					cells.push(r);
					map[r.tissue.tissueGroup.name] = cells;
				});
				this.setState({ loading: false, data: map });
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
					<ResultTable data={this.state.data} />
				)}
			</div>
		);
	}
}

export default RootContainer;
