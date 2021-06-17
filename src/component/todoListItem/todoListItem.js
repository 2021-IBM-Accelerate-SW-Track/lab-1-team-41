import React, { useState }from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



function TodoListItem(props) {

    function setEdit() {
        let tempid = "itemText"+props.keyVal;
        let text = document.getElementById(tempid).textContent;
        console.log(text);
        if(text!==props.title) {
            props.update(props.title, text);
        }
    }

    function handleKeyDown(e) {
        let tempid = "itemText"+props.keyVal;
        if (e.key === 'Enter' && document.getElementById(tempid)===document.activeElement) {
            document.getElementById(tempid).blur();
            setEdit();
        }
    }

    return (
        <Paper key={props.keyVal} className="list-item" component="li">
            <ListItem component="div">
                <ListItemIcon>
                    <Checkbox 
                        color="primary"
                        checked={props.completed}
                    />
                </ListItemIcon>
                <ListItemText id={"itemText"+props.keyVal} primary={props.title} contentEditable="true" onMouseUp={setEdit} onBlur={setEdit} onKeyDown={handleKeyDown}/>
                <ListItemText primary={"Added on: " + props.dateAdded + ", " + props.timeAdded}/>
                <ListItemSecondaryAction>
                    <IconButton color="secondary">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    );
}

export default TodoListItem;