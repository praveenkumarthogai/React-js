import React from 'react'

export default function MemoChild(props) {

    console.log('Memo Component rendering');
    console.log(props.name);
    return (
        <div>
            {props.name.map(x=>{
                return (<div>{x.name}</div>)
            })}
        </div>
    )
}
