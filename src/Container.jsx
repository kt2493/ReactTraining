import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

export const Container = () => (
    <div className="container">
        <Header />
        <Main />
        <Footer />
    </div>
);