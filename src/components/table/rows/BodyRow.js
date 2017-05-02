import React from 'react';

const BodyRow = ({ pet }) => (
    <tr>
        {
            Object.keys(pet).map((info, idx) => (
                <td key={idx}>{ pet[info] }</td>
            ))
        }
    </tr>
);

export default BodyRow;