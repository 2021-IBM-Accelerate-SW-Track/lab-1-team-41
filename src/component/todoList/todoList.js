import React, { useState }from 'react';
import TodoListItem from "../todoListItem/todoListItem"
import { Button, Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';

function TodoList() {
    const [todolist, setTodolist] = useState([]);
    const [inputTitle, setValue] = useState('');
    const [deleteInput, setDelete] = useState('');
    //the delete button and everything can be removed by whoever is doing that issue

    let listItems = todolist.map( (todoitem, index) =>
        <TodoListItem 
            keyVal={index} 
            title={todoitem.title} 
            dateAdded={todoitem.dateAdded} 
            timeAdded={todoitem.timeAdded} 
            dateDue={todoitem.dateDue}
            completed={todoitem.completed}
        />
    )

    function addItem() {
        let templist = [...todolist];
        templist.push({
            title: inputTitle,
            dateAdded: "",
            timeAdded: "",
            dateDue: "",
            completed: false
        })
        //date and time variables can be changed from strings by whoever is doing that issue
        setTodolist(templist);
        setValue("");
    }
    function deleteItem() {
        let templist = [...todolist];
        templist = templist.filter(item => item.title !== deleteInput);
        setTodolist(templist);
        setDelete("");
    }

    return (
        <Container>
            <List component="nav">
                {listItems}
            </List>
        
            <TextField id="filled-basic" label="Add Item" variant="filled" data-testid="new-item-input"
                value={inputTitle} 
                onChange={(e) => setValue(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={addItem} data-testid="new-item-button">
                Add Item
            </Button>
            <TextField id="filled-basic2" label="Delete Item" variant="filled"
                value={deleteInput} 
                onChange={(e) => setDelete(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={deleteItem}>
                Delete Item
            </Button>
        </Container>
    );
}

export default TodoList;