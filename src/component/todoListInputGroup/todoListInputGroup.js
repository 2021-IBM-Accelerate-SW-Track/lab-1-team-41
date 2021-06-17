import React, { useState }from 'react';
import { Button, TextField } from '@material-ui/core';

export default function TodoListInputGroup (props){
    let [inputTitle, setTitle] = useState("");

    function addItemClicked() {
        let addResult = props.addHandler(inputTitle);
        if (addResult === true){
            // item addition was a success - clear input
            setTitle("");
        } else {
            // item not added - could add error message here
        }
    }

    return (
        <div className="todo-input-group-container">
            <TextField id="filled-basic" label="Add Item" variant="filled" data-testid="new-item-input"
                value={inputTitle} 
                onChange={(e) => setTitle(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={addItemClicked} data-testid="new-item-button">
                Add Item
            </Button>
        </div>
    )
}