import React from "react"

function Signup() {
    return (
        <React.Fragment>
            <div className="flex w-full xl:flex-nowrap md:flex-nowrap pt-8 lg:flex-wrap flex-wrap justify-center items-center">
                <div className="relative w-50 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                    <input
                        placeholder="Enter email"
                        type="text"
                        id="footer-field1"
                        name="footer-field1"
                        className="w-full bg-gray-100 mt-4 bg-opacity-50 rounded-full border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        // value="20"
                        // onChange={handleTodo}
                    />
                    <input
                        placeholder="Enter password"
                        type="text"
                        id="footer-field2"
                        name="footer-field2"
                        className="w-full bg-gray-100 mt-4 bg-opacity-50 rounded-full border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        // value="20"
                        // onChange={handleTodo}
                    />{" "}
                    <button
                        type="submit"
                        className="mt-4 flex-shrink-0 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full"
                        // onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup
