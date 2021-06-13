import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoListItem(props) {
    return (
        <div>
            <ListItem>
                <ListItemText primary={props.title} />
            </ListItem>
        </div>
    );
}

export default TodoListItem;