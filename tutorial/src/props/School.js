import Student from "./Student";
import { useState } from 'react';


function School(props) {

    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
    console.log('student rendered');

    const emitter=(msg)=>{
        props.subscribe(msg);
    }

    return (
        <>
            <button onClick={handleCount}>Pass Count Value To student component</button>
            <div><Student count={count}></Student></div>
            <button onClick={()=>{emitter('hello Welcome')}}>emit to parent</button>
        </>
    )
}

export default School;