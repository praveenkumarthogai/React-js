import React from 'react';
import './Style.css';

export default function Styling(props) {

    let className = props?.isValid ? 'primary' : 'secondary';
    console.log(className);
    return (
        <div>
            <h2 className={className}>hey stylesheet</h2>

        </div>
    )
}
