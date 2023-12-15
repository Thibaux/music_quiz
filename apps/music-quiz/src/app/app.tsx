import React from "react";
import {Route, Routes} from "react-router";
import {Login} from "./Login";
import {Home} from "./Home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
};

export default App;