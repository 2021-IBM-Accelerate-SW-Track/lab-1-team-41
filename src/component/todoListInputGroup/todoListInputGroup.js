import React, { useState }from 'react';
import { Button, TextField } from '@material-ui/core';

export default function TodoListInputGroup (props){
    let [inputTitle, setTitle] = useState("");

    return (
        <div className="todo-input-group-container">
            <TextField id="filled-basic" label="Add Item" variant="filled" data-testid="new-item-input"
                value={inputTitle} 
                onChange={(e) => setTitle(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={() => props.addHandler(inputTitle)} data-testid="new-item-button">
                Add Item
            </Button>
        </div>
    )
}