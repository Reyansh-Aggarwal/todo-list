import React from 'react';

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input id = "input" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder = "Add Todo"></input>
            <button onClick = {() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}
            >Add</button>

        </header>
    )
}