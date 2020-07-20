import React, { useState } from 'react';
import todoStore from '../store';

const Todo = ({ text, index }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(text)

    const updateTodo = () => {
        todoStore.editItem(index, editText);
        setIsEdit(false);
    }
    return (
        <li key={text} onDoubleClick={() => setIsEdit(true)} className="list-group-item d-flex justify-content-between align-items-center">
            {
                isEdit ? (
                    <>
                        <input type="text" value={editText} class="form-control col-sm-10" onChange={e => setEditText(e.target.value)} />
                        <div className="col-sm-2">
                            <button className="btn btn-warning" onClick={updateTodo}>Save</button>
                        </div>
                    </>
                ) : (
                        <>
                            {text}
                            <span className="badge badge-danger badge-pill" onClick={() => todoStore.deleteTodo(index)}><strong>X</strong></span>
                        </>
                    )
            }
        </li>
    )
}

export default Todo