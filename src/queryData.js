const proteinAtlasExpressionQuery = geneId => ({
	from: 'Gene',
	select: [
		'symbol',
		'primaryIdentifier',
		'proteinAtlasExpression.tissue.name',
		'proteinAtlasExpression.tissue.tissueGroup.name',
		'proteinAtlasExpression.cellType',
		'proteinAtlasExpression.reliability',
		'proteinAtlasExpression.level'
	],
	orderBy: [
		{
			path: 'symbol',
			direction: 'ASC'
		}
	],
	where: [
		{
			path: 'Gene.id',
			op: '=',
			value: geneId
		}
	]
});

function queryData(geneId, serviceUrl, imjsClient = imjs) {
	return new Promise((resolve, reject) => {
		const service = new imjsClient.Service({ root: serviceUrl });
		service
			.records(proteinAtlasExpressionQuery(geneId))
			.then(data => {
				if (data && data.length) resolve(data[0]);
				else reject('No data found!');
			})
			.catch(reject);
	});
}

export default queryData;
