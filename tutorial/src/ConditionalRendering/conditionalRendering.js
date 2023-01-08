import React from 'react'
import { useState } from 'react';

export default function ConditionalRendering() {

    const [isLoggedIn, setLogin] = useState(true)

    const display = () => {
        if (isLoggedIn) {
            return (<>hello praveen</>)
        }
        else {
            return (<>un authorized</>)
        }

    }

    return (
        <div>
            {
                display()
            }
        </div>
    )
}

//------Other Techniques-----------------------

//ternary operator | isLoggedIn && <>hello</>




