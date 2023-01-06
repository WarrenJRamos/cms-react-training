import React, { useEffect, useState } from "react";
import Context from "../../context/index-store";
import useRequest from "../../hooks/use-request";
import { ComicData } from "../../types/shared_types";
import { Header } from "../Header/Header";
import classes from "../../styles/Home/Layout.module.css";
import { Hero } from "./Hero";
import { Filter } from "../Filter";
import { ComicsGrid } from "../Comics/ComicsGrid";
import { Favorites } from "../Favorites/Favorites";
import { Footer } from "../Footer/Footer";
import { IntroTextBox } from "./IntroTextBox";
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
