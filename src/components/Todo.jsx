import React, { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext.js"

function Todo() {
    const { Todos, setTodos } = useContext(TodoContext)

    const handleIsDone = (id) => {
        setTodos(
            Todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    return (
        <React.Fragment>
            <div className="flex justify-center">
                <table className="table-fixed w-full md:w-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Todo</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Time</th>
                            <th className="px-4 py-2">Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Todos.length &&
                            Todos.map((todo) => {
                                return (
                                    <tr
                                        key={todo.id}
                                        className="hover:bg-sky-700  rounded-full odd:bg-white even:bg-slate-50"
                                    >
                                        <td className="px-4 py-2">
                                            {todo.head}
                                        </td>
                                        <td className="px-4 py-2">
                                            {todo.time.toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-2">
                                            {todo.time.toLocaleTimeString()}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                checked={todo.isDone}
                                                onChange={() =>
                                                    handleIsDone(todo.id)
                                                }
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Todo
