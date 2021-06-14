import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon } from '@material-ui/core';

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
        </ListItem>
    );
}

export default TodoListItem;