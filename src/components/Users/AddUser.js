import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    function addUserSubmitHandler(event) {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        props.addUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }

    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title={"An error occured!"} message={"Something went wrong!"} />
            <Card className={styles.input}>
                <form onSubmit={addUserSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
