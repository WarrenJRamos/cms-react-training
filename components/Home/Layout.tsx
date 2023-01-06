import React from "react";
import { Header } from "../Header/Header";
import { Hero } from "./Hero";
import { Footer } from "../Footer/Footer";
import { Content } from "./Content";

export const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <Content />
            <Footer />
        </>
    );
};
