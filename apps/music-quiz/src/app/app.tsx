import React from "react";
import {Route, Routes} from "react-router";
import {Login} from "./Login";
import {Home} from "./Home";
import {Start} from "./Start";
import {Playlists} from "./Playlists";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/start" element={<Start/>}/>
            <Route path="/playlists" element={<Playlists/>}/>
        </Routes>
    );
};

export default App;