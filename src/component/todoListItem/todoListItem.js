import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Checkbox, ListItemIcon, ListItemSecondaryAction, IconButton, Paper, Chip} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { CheckCircleRounded } from '@material-ui/icons';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import EventIcon from '@material-ui/icons/Event';


function TodoListItem(props) {

    function setEdit() {
        let tempid = "itemText"+props.indexVal;
        let text = document.getElementById(tempid).textContent;
        console.log(text);
        if(text!==props.title) {
            props.update(props.title, text);
        }
    }

    function handleKeyDown(e) {
        let tempid = "itemText"+props.indexVal;
        if (e.key === 'Enter' && document.getElementById(tempid)===document.activeElement) {
            document.getElementById(tempid).blur();
            setEdit();
        }
    }

    let listItemClassName = props.completed === true ? 'list-item is-completed' : 'list-item';

    return (
        <Paper key={props.indexVal} className={listItemClassName} component="div">
            <ListItem component="div">
                <ListItemIcon>
                    <Checkbox 
                        color="primary"
                        checkedIcon={<CheckCircleRounded className="todo-item-checked-icon"/>}
                        icon={<RadioButtonUnchecked/>}
                        checked={props.completed}
                        onChange={() => props.markComplete(props.indexVal, props.completed === true ? false : true)}
                        
                    />
                </ListItemIcon>
                <div className="todo-item-title-date-container" data-date-present={props.dateDue !== null}>
                    <ListItemText 
                        id={"itemText"+props.indexVal} 
                        className="todo-item-title" 
                        contentEditable={props.completed ? "false" : "true"}
                        primary={props.title} 
                        onMouseUp={setEdit} 
                        onBlur={setEdit} 
                        onKeyDown={handleKeyDown}/>
                        { props.dateDue != null &&
                            <Chip
                                className="todo-item-date-chip"
                                title="Due Date"
                                icon={<EventIcon className="todo-item-date-chip-icon"fontSize="small"/>}
                                label={props.dateDue.toLocaleDateString("en-US", { month: 'long', day: 'numeric'}) + " @ " + props.dateDue.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'})}
                            />
                        }
                </div>
                
                <ListItemText className="todo-item-date-added" secondary={"Added on: " + props.dateAdded + " @ " + props.timeAdded}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => props.delete(props.title)} className="todo-item-delete-btn">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Paper>
    );
}

export default TodoListItem;