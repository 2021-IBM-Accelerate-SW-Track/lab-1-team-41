import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoListItem(props) {
    return (
        <ListItem key={props.keyVal}>
            <ListItemText primary={props.title}/>
        </ListItem>
    );
}

export default TodoListItem;