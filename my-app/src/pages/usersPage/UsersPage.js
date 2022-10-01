import React from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {

    const [users, setUsers] = React.useState([])

    const [user, setUser] = React.useState({})

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const fetchUser = e => {
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }

    return (
        <div>
            <button onClick={fetchUsers}>get users</button>
            <UsersList users={users} userOne={fetchUser}/>
            <div>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </div>
        </div>
    );
}

export default UsersPage;