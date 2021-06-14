import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem(props) {
    return (
        <Paper key={props.keyVal} component="li" style={{maxWidth: '50%', margin: 'auto'}}>
            <ListItem component="div">
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
        </Paper>
    );
}

export default TodoListItem;