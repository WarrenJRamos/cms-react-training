import React from "react";
import classes from "../../styles/Home/Layout.module.css";
import { Header } from "../Header/Header";
import { Hero } from "./Hero";
import { Footer } from "../Footer/Footer";
import { Content } from "./Content";

export const Layout = () => {
    return (
        <>
            <Header />
            <main className={`${classes["main"]}`}>
                <Hero />
                <Content />
            </main>
            <Footer />
        </>
    );
};
