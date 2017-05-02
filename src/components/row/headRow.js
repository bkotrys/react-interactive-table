import React from 'react';

const HeadRow = ({ columnsNames }) => (
	<tr>
		{
			columnsNames.map((name, idx) => (
				<th key={idx}> {name} </th>)
			)
		}
	</tr>
);

export default HeadRow;