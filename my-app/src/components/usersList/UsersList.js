import React from 'react';

function UsersList({users, userOne}) {
    return (
        <div>
            {
                users.map(user =>
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <button onClick={userOne} data-id={user.id}>info</button>
                    </div>
                )
            }
        </div>
    );
}

export default UsersList;