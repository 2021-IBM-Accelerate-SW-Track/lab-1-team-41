import React, { useState }from 'react';
import { Button, TextField, Paper, Typography, Dialog } from '@material-ui/core';
import { DateTimePicker } from "@material-ui/pickers";

export default function TodoListInputGroup (props){
    let [inputTitle, setTitle] = useState("");
    let [dateDue, setDateDue] = useState(null);

    function addItemClicked() {
        let addResult = props.addHandler(inputTitle, dateDue);
        // let addDate = props.addHandler(dateDue);
        if (addResult === true){
            // item addition was a success - clear input
            setTitle("");
            setDateDue("");
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
            <Paper id="todo-input-group-date-container" component="div">
                <Typography>{dateDue === null ? "No Due Date" : dateDue}</Typography>
            </Paper>
            <Dialog open={true}>
                <DateTimePicker
                    variant="static"
                    format="d MMM yyyy"
                    value={{}}
                    onChange={{}}
                />
            </Dialog>
            
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