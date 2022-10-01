import React from 'react';
import {useState} from 'react';

function FormPage(props) {
    const [user, setUser] = useState (
        {
            name: "",
            userName: "",
            gender: ""
        }
    )

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const registerUser = e => {
        e.preventDefault()

        if(user.name.trim() ===""){
            alert("имя не задано")
            return
        }else if(user.userName.trim()===""){
            alert("логин не задан")
            return
        }else if(user.gender.trim()===""){
            alert("пол не выбран")
            return
        }
        console.log(user);
    }

    return (
        <>
            <form onSubmit={registerUser}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="userName"
                    name="userName"
                    onChange={changeInput}
                />

                <select name="gender" onChange={changeInput}>
                    <option value="">Выберите пол</option>
                    <option value="м">М</option>
                    <option value="ж">Ж</option>
                </select>
                <button type="submit">register</button>
            </form>
        </>
    );
}

export default FormPage;