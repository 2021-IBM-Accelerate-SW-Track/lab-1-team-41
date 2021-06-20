import React, { useState }from 'react';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import TodoListItem from "../todoListItem/todoListItem"
import TodoListInputGroup from "../todoListInputGroup/todoListInputGroup";

function TodoList() {
    const [todoList, setTodoList] = useState([]);

    let listItems = todoList.map( (todoitem, index) =>
        <TodoListItem 
            key={index}
            indexVal={index} 
            title={todoitem.title} 
            dateAdded={todoitem.dateAdded} 
            timeAdded={todoitem.timeAdded} 
            dateDue={todoitem.dateDue}
            completed={todoitem.completed}
            update={updateText}
        />
    );
    
    function updateText(oldText, newText) { //look into updateDate function
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

    function addItem(inputTitle, dateDue) {
        var dateObj = new Date();
        const newItem = {
            title: inputTitle,
            dateAdded: (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear(),
            timeAdded: dateObj.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', timeZoneName: 'short'}),
            dateDue: dateDue,
            completed: false,
        }
        
        //could add error message later on
        if (!newItem.title || isDuplicate(newItem)) return false; 

        //date and time variables can be changed from strings by whoever is doing that issue
        setTodoList([...todoList, newItem]);
        return true;
    }

    function deleteItem(deleteInput) {
        let templist = [...todoList];
        templist = templist.filter(item => item.title !== deleteInput);
        setTodoList(templist);
    }

    return (
        <Container>
            <div className="list-container">
                <List component="ul">
                    {listItems}
                </List>
            </div>

            <TodoListInputGroup
                addHandler={addItem}
            />
        </Container>
    );
}

export default TodoList;