import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(enteredUsername, enteredAge) {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    name: enteredUsername,
                    age: enteredAge,
                    id: Math.random().toString(),
                },
            ];
        });
    }

    return (
        <div>
            <AddUser addUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
