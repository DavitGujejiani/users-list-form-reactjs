import React from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";

function AddUser(props) {
    function addUserSubmitHandler(event) {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <button type={"submit"}>Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;