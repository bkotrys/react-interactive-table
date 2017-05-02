import React from 'react';

const PetRow = ({ pet }) => (
    <tr>
        {
            Object.keys(pet).map((info, idx) => (
                <td key={idx}>{ pet[info] }</td>
            ))
        }
    </tr>
);

export default PetRow;