import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../../Domains/Authentication/Login';
import { Home } from '../../Domains/Home/Home';
import { Layout } from '../../Layout/Layout';
import { SessionOverview } from '../../Domains/Session/SessionOverview';

const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />

                <Route path="/sessions/:id" element={<SessionOverview />} />
            </Routes>
        </Layout>
    );
};

export default Router;
