import NxWelcome from './nx-welcome';
import { Ui } from "@music-quiz/ui";
import { Route, Routes } from 'react-router-dom';
import WelcomeComponent from "../../../../ui/src/lib/Components/welcomeComponent";
import {Home} from "../Pages/Home";
import {Login} from "../Pages/Login";


function Welcome() {
    return <WelcomeComponent/>
}

function Ui2() {
    return <Ui/>
}

export function App() {
  return (
    <Routes>
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/"} element={Welcome()}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/ui"} element={Ui2()}></Route>
    </Routes>
  );
}

export default App;
