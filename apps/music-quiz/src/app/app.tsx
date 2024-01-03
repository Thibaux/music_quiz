import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from './Domains/Auth/Login';
import { Home } from './Domains/Home/Home';
import { Start } from './Start';
import { Playlists } from './Playlists';
import { Layout } from '../Layout/Layout';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/*<Routes>*/}
                {/*<Route element={<ProtectedRoute/>}>*/}
                <Route path="/home" element={<Home />} />
                <Route path="/start" element={<Start />} />
                <Route path="/playlists" element={<Playlists />} />
                {/*</Route>*/}
                {/*</Routes>*/}
            </Routes>
        </Layout>
    );
};

export default App;
