import React from 'react';
import styles from './table_style';

const Table = ({ data = {}, title = 'Data Table' }) => {
	const columns = Object.keys(data[2]);
	return (
		<React.Fragment>
			<h4 style={styles.tableTitle}>{title}</h4>
			<table style={styles.dataTable}>
				<tr>
					{columns.map((item, i) => {
						return (
							<th style={styles.th} key={i}>
								{item}
							</th>
						);
					})}
				</tr>
				{data.map((row, i) => {
					return (
						<tr key={i} style={i % 2 === 0 ? styles.tr_even : {}}>
							{Object.keys(row).map((item, i) => {
								return (
									<td style={styles.td} key={i}>
										{row[item]}
									</td>
								);
							})}
						</tr>
					);
				})}
			</table>
		</React.Fragment>
	);
};

export default Table;
