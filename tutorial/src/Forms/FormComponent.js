import React from 'react'
import { useState } from 'react'

export default function FormComponent() {

    const initialState = {
        userName: '',
        password: ''
    }

    const [data, setData] = useState(initialState);

    const handleUserName = (e) => {
        setData({ ...data, userName: e.target.value })
    }

    const handlePassword = (e) => {
        setData({ ...data, password: e.target.value })
    }

    const handleOnSubmit = () => {
        alert(`${data.userName} ${data.password}`);
    }


    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={data.userName} onChange={handleUserName} />
                </div>
                <div>

                    <label>Password</label>
                    <input type="password" value={data.password} onChange={handlePassword} />
                </div>
                <button type='submit'>submit</button>
            </form>

        </div>
    )
}
