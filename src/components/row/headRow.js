import React from 'react';

const HeadRow = ({ columnNames }) => (
	<tr>
		{
			columnNames.map((name, idx) => (
				<th key={idx}> {name} </th>)
			)
		}
	</tr>
);

export default HeadRow;