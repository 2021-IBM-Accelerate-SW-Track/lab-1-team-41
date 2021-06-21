import React, { useState }from 'react';
import { Button, TextField, Paper, Typography, Dialog } from '@material-ui/core';
import { DateTimePicker } from "@material-ui/pickers";

export default function TodoListInputGroup (props){
    let [inputTitle, setTitle] = useState("");
    let [dateDue, setDateDue] = useState(null);
    let [dateModalOpen, setDateModalOpen] = useState(false);

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

    function handleDateChange(e){
        console.log(e);
        setDateDue(e);
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

            <Paper id="todo-input-group-date-container" component="div" onClick={() => setDateModalOpen(true)}>
                <Typography>{dateDue === null ? "No Due Date" : "Due: " + dateDue.toLocaleString()}</Typography>
            </Paper>

            <Dialog open={dateModalOpen} onClose={() => setDateModalOpen(false)}>
                <DateTimePicker
                    disablePast
                    variant="static"
                    format="d MMM yyyy"
                    value={dateDue}
                    onChange={(e) => setDateDue(e)}
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