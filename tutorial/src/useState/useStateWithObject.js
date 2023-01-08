import {useState} from 'react';

export default function UseStateWithObject() {

    const initialData = { firstName: '', lastName: '' };
    const [data, setData] = useState(initialData);


    const handleFirstName = (event) => {
        setData({ ...data, firstName: event.target.value })
    }

    const handleLastName = (event) => {
        setData({ ...data, lastName: event.target.value })
    }

    return (
        <>
            <div>FirstName - {data.firstName}</div>
            <div>LastName - {data.lastName} </div>
            <input  type="text" value={data.firstName} onChange={handleFirstName} />
            <input  type="text" value={data.lastName} onChange={handleLastName} />
        </>
    )
}