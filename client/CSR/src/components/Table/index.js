import React from 'react';
import MUIDataTable from 'mui-datatables';

const Table = ({ data = {}, title = 'Data Table' }) => {
	const columns = Object.keys(data[0]);
	const options = {
		pagination: false,
		// count: 20,
		download: false,
		search: false,
		print: false,
		filter: false,
		viewColumns: false,
		selectableRowsHeader: false,
		selectableRows: 'none',
		sort: false,
		responsive: 'standard'
	};
	return (
		<React.Fragment>
			<MUIDataTable
				title={title}
				data={data}
				columns={columns}
				options={options}
			/>
		</React.Fragment>
	);
};

export default Table;
