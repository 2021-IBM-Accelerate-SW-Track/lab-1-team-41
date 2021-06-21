import React, { useState }from 'react';
import { Button, TextField } from '@material-ui/core';

// const useStyle = makeStyles(theme => ({
//     root: {
//         '& .MuiFormControl-root':{
//             width: '100%',
//             margin: theme.spacing(1)
//         }
//     }
// }));

export default function TodoListInputGroup (props){
    let [inputTitle, setTitle] = useState("");
    let [dateDue, setDateDue] = useState("");
    // const classes = useStyle();

    function addItemClicked() {
        let addResult = props.addHandler(inputTitle);
        let addDate = props.addHandler(dateDue);
        if (addResult === true){
            // item addition was a success - clear input
            if(addDate === true){
                setDateDue("");
            }
            setTitle("");
           
        } else {
            // item not added - could add error message here
        }
    }
    function handleInputChangeTitle(e){
        const {inputTitle, value} = e.target
        setTitle(value)
        
    }

    function handleTitleKeyDown(e){
        if (e.key === "Enter"){
            addItemClicked();
        }
    }

    function handleInputChangeDateDue(e){
        setDateDue(e.target.value);
    }
    
    return (
        <div id="todo-input-group-container">
            <TextField 
                className="todo-input-group-textfield-container" 
                label="Todo Title" 
                variant="filled" 
                data-testid="new-item-input"
                value={inputTitle} 
                onChange={handleInputChangeTitle}
                onKeyDown={(e) => handleTitleKeyDown(e)}
                InputProps={{id: "todo-input-group-title-field"}}/>
            <TextField
                className="todo-input-group-textfield-container"
                id="date"
                label="Due Date"
                type="date"
                placeholder={dateDue === null ? "No Due Date" : "Enter Date"}
                value = {dateDue}
                onChange={handleInputChangeDateDue}
                onKeyDown={(e) => handleTitleKeyDown(e)}
                InputLabelProps={{ shrink: true }}/>
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