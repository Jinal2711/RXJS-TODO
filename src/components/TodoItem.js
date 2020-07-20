import React, { useState, useEffect } from 'react';
import todoStore from '../store';
import Todo  from './ToDoEdit';

const ToDoList = ({ data = [] }) => {

    const deleteItem = (index) => {
        todoStore.deleteTodo(index);
    }

    const editText = () => {

    }

    return (
        <ul className="list-group">
            {
                data.map((todo, i) => <Todo text={todo} index={i}/>)
            }
        </ul>
    )
}

export default ToDoList;