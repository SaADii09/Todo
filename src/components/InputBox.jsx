import React, { useState, useContext } from "react"
import { nanoid } from "nanoid"
import { TodoContext } from "../context/TodoContext.js"

function InputBox() {
    const { Todos, setTodos } = useContext(TodoContext)

    const [val, setVal] = useState("")

    function handleTodo(e) {
        setVal(e.target.value)
    }
    function handleSubmit() {
        const newTodo = {
            id: nanoid(),
            head: val,
            isDone: false,
            time: new Date(Date.now()),
        }
        setTodos([...Todos, newTodo])
        setVal("")
    }
    return (
        <React.Fragment>
            <div className="flex w-full xl:flex-nowrap md:flex-nowrap pt-8 lg:flex-wrap flex-wrap justify-center items-center">
                <div className="relative w-50 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                        placeholder="Enter Todo"
                        type="text"
                        id="footer-field"
                        name="footer-field"
                        className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={val}
                        onChange={handleTodo}
                    />
                </div>
                <button
                    type="submit"
                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </React.Fragment>
    )
}

export default InputBox
