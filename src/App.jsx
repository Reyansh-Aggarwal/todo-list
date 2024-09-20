import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState, useEffect } from "react"

function App() {
	const [todos, setTodos] = useState([])
	const [todoValue, setTodoValue] = useState("")


	function persistData(newList){
		localStorage.setItem("todos", JSON.stringify({todos: newList}))
	}

	function handAddTodos(newTodo) {
		if (newTodo.length > 0) {
			const newTodoList = [...todos, newTodo]
			persistData(newTodoList)
			setTodos(newTodoList)
		}
	}

	function handleDeleteTodo(index) {

		const newTodoList = todos.filter((todo, todoIndex) => {
			console.log("test")
			return todoIndex !== index
		})
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleEditTodo(index){
		const valueToDelete = todos[index]
		setTodoValue(valueToDelete)
		handleDeleteTodo(index)
	}

	useEffect(() => {
		if(!localStorage){
			return
		}
		let localTodos = localStorage.getItem("todos")
		if(!localTodos){
			return
		}

		localTodos = JSON.parse(localTodos).todos
		setTodos(localTodos)

	}, [])

	return (
		<>
			<TodoInput handleAddTodos={handAddTodos} todoValue = {todoValue} setTodoValue = {setTodoValue}/>
			<TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
		</>
	)
}

export default App
