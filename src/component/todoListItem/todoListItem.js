import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem(props) {

    function setEdit() {
        let text = document.getElementById("itemText").textContent;
        console.log(text);
        props.update(props.keyVal, text);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            document.getElementById("itemText").blur();
            setEdit();
        }
    }

    return (
        <Paper key={props.keyVal} component="li" style={{maxWidth: '50%', margin: 'auto'}}>
            <ListItem component="div">
                <ListItemIcon>
                    <Checkbox 
                        color="primary"
                        checked={props.completed}
                    />
                </ListItemIcon>
                <ListItemText id="itemText" primary={props.title} contentEditable="true" onBlur={setEdit} onKeyDown={handleKeyDown}/>
                {props.editModeEnabled !== true ? true : false &&
                    <ListItemSecondaryAction>
                        <IconButton color="secondary">
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                }
            </ListItem>
        </Paper>
    );
}

export default TodoListItem;