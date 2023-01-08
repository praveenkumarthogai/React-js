import React from 'react'
import School from './School';

export default function PassingPropsAsMethods() {

    const messageFromChild = (message) => {
        console.log(message);
    }

    return (
        <div>
            <School subscribe={messageFromChild} />
        </div>
    )
}
