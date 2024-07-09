import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Houses from "./pages/Houses"
import Error from "./pages/Error"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/error" element={<Error />} />
        </Routes>
    )
}

export default AppRoutes
