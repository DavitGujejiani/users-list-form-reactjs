import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    function addUserSubmitHandler(event) {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    }
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;