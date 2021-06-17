import React, { useState }from 'react';
import TodoListItem from "../todoListItem/todoListItem"
import { Button, Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputTitle, setTitle] = useState('');
    const [deleteInput, setDelete] = useState(''); // the delete button and everything can be removed by whoever is doing that issue

    let listItems = todoList.map( (todoitem, index) =>
        <TodoListItem 
            keyVal={index} 
            title={todoitem.title} 
            dateAdded={todoitem.dateAdded} 
            timeAdded={todoitem.timeAdded} 
            dateDue={todoitem.dateDue}
            completed={todoitem.completed}
            update={updateText}
        />
    );
    
    function updateText(oldText, newText) {
        let templist = [...todoList];
        for(let i = 0; i<templist.length; i++) {
            if(templist[i].title === oldText) {
                templist[i].title = newText;
            }
        }
        setTodoList(templist);
    }

    function isDuplicate(newItem) {
        for (let i = 0; i < todoList.length; ++i) {
            if (newItem.title === todoList[i].title) { // will add more checks when date and time is defined
                return true;
            }
        }
        return false;
    }

    function addItem() {
        var dateObj = new Date();
        const newItem = {
            title: inputTitle,
            dateAdded: (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear(),
            timeAdded: dateObj.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', timeZoneName: 'short'}),
            dateDue: "",
            completed: false,
        }
        
        //could add error message later on, also add check for date and time when those are added
        if (!newItem.title || isDuplicate(newItem)) return; 

        //date and time variables can be changed from strings by whoever is doing that issue
        setTodoList([...todoList, newItem]);
        setTitle(""); //clear item name after it is added
        
    }

    function deleteItem() {
        let templist = [...todoList];
        templist = templist.filter(item => item.title !== deleteInput);
        setTodoList(templist);
        setDelete("");
    }

    return (
        <Container>
            <div className="list-container">
                <List component="ul">
                    {listItems}
                </List>
            </div>
        
            <TextField id="filled-basic" label="Add Item" variant="filled" data-testid="new-item-input"
                value={inputTitle} 
                onChange={(e) => setTitle(e.target.value)}/>
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