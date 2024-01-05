import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../../Domains/Auth/Login';
import { Home } from '../../Domains/Home/Home';
import { Layout } from '../../Layout/Layout';

const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default Router;
