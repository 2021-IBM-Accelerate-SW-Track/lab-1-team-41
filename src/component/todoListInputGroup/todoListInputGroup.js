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

    function handleTitleKeyDown(e){
        if (e.key === "Enter"){
            addItemClicked();
        }
    }

    return (
        <div id="todo-input-group-container">
            <TextField 
                className="todo-input-group-textfield-container" 
                label="Todo Title" 
                variant="filled" 
                data-testid="new-item-input"
                value={inputTitle} 
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleTitleKeyDown(e)}
                InputProps={{id: "todo-input-group-title-field"}}/>
            <Button 
                id="todo-input-group-add-button" 
                variant="contained" 
                color="primary" 
                onClick={addItemClicked} 
                data-testid="new-item-button">
                Add Todo
            </Button>
        </div>
    )
}