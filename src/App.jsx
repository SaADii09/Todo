import { useState, useEffect } from "react"
import { Todo, InputBox } from "./components/index.js"
import { TodoContext, UserContext } from "./contexts/index.js"

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

    const [User, setUser] = useState({})

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(Todos))
    }, [Todos])

    return (
        <UserContext.Provider value={{ User, setUser }}>
            <TodoContext.Provider value={{ Todos, setTodos }}>
                <InputBox />

                <Todo />
            </TodoContext.Provider>
        </UserContext.Provider>
    )
}

export default App
