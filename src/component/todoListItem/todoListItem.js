import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem(props) {

    function setEdit() {
        let text = document.getElementById("itemText").textContent;
        props.update(props.keyVal, text);
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
                <ListItemText id="itemText" primary={props.title} contentEditable="true" onBlur={setEdit}/>
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