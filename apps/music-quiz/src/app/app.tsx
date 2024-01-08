import React from "react";
import {Route, Routes} from "react-router";
import {Login} from "./Login";
import {Home} from "./Home";
import {Start} from "./Start";
import {Playlists} from "./Playlists";
import WelcomeComponent from "ui/src/lib/Components/WelcomeComponent";
import { Ui } from "@music-quiz/ui";

function Ui2() {
  return <Ui/>
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/start" element={<Start/>}/>
            <Route path="/playlists" element={<Playlists/>}/>

            <Route path={"/welcome"} element={<WelcomeComponent/>}></Route>
            <Route path={"/ui"} element={Ui2()}></Route>
        </Routes>
    );
};

export default App;
