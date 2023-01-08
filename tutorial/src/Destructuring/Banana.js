import React from 'react'

export default function Banana(props) {

    const { inside, outside } = props;
    return (
        <div>
            {inside} / {outside}
        </div>
    )
}
