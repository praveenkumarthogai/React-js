import React from 'react'
import MemoChild from './MemoChild'
import { useState } from 'react'

export default function MemoParent() {
    const initialState = [{
        name:'praveen'
    }];
    const [data, setData] = useState(initialState)
    const passDataToChild = () => {
        console.log('method called')
        data.push({name:'kumar'})
        const newData = [...data];
        setData(newData);
    }
    console.log('MemoParent rendering');
    return (
        <div>
            <button onClick={() => { passDataToChild() }}>Pass Data to Child Component</button>
            <MemoChild name={data} />
        </div>
    )
}

//Re visit not working 
