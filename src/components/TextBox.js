import React, { useState } from 'react';
import { Subject } from 'rxjs';

const TextBox = ({onSubmit}) => {

    const [todoText, setTodoText] = useState("");
    const todoSubject = new Subject();

    const submitText = (e, text) => {
        e.preventDefault();
        onSubmit(text);
        setTodoText("");
    }

    return (
        <>
            <form>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" 
                        value={todoText} 
                        className="form-control" 
                        placeholder="Enter todo name..."
                        onChange={(e) => setTodoText(e.target.value)} />
                    </div>

                    <button className=" col-sm-2 btn btn-success" onClick={(e) => submitText(e, todoText)}>SUBMIT</button>
                </div>
            </form>
          
        </>
    )
}

export default TextBox;
