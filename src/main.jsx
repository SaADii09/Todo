import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login, NoPage, Signup } from "./pages/index.js"
import { Header, Footer } from "./components/index.js"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <div className="mt-12">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
