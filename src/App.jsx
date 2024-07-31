import { useState, useEffect } from "react"
import InputBox from "./components/InputBox.jsx"
import Todo from "./components/Todo.jsx"
import { TodoContext } from "./context/TodoContext.js"

function App() {
    const [Todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("Todos")
        if (storedTodos) {
            const parsedTodos = JSON.parse(storedTodos)
            return parsedTodos.map((todo) => ({
                ...todo,
                time: new Date(todo.time),
            }))
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos))
    }, [Todos])

    return (
        <TodoContext.Provider value={{ Todos, setTodos }}>
            <InputBox />

            <Todo />
        </TodoContext.Provider>
    )
}

export default App
