import React, { useState }from 'react';
import MyListItem from "./myListItem"
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';

function MyList() {
    const [todolist, setTodolist] = useState([]);
    const [inputTitle, setValue] = useState('');
    const [deleteInput, setDelete] = useState('');

    let listItems = todolist.map( (todoitem) =>
        <MyListItem title={todoitem.title} dateAdded={todoitem.dateAdded} timeAdded={todoitem.timeAdded} dateDue={todoitem.dateDue}/>
    )

    function addItem() {
        let templist = [...todolist];
        templist.push({
            title: inputTitle,
            dateAdded: "",
            timeAdded: "",
            dateDue: "",
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
        <div>
            <div>
                <List component="nav">
                    {listItems}
                </List>
            </div>
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
        </div>
    );
}

export default MyList;