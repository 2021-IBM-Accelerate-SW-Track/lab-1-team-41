import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem(props) {
    return (
        <ListItem key={props.keyVal}>
            <ListItemIcon>
                <Checkbox 
                    color="primary"
                    checked={props.completed}
                />
            </ListItemIcon>
            <ListItemText primary={props.title}/>
            {props.editModeEnabled !== true ? true : false &&
                <ListItemSecondaryAction>
                    <IconButton color="secondary">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            }
            
        </ListItem>
    );
}

export default TodoListItem;