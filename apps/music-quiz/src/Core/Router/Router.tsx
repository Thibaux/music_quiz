import React from 'react';
import { Route, Routes } from 'react-router';
import { Login } from '../../Domains/Authentication/Login';
import { Home } from '../../Domains/Home/Home';
import { Layout } from '../../Layout/Layout';
import { Intros } from '../../Domains/Quizzes/Types/Intros';

const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />

                <Route path="/quiz/intros" element={<Intros />} />
            </Routes>
        </Layout>
    );
};

export default Router;
