import React, { useContext } from "react";
import classes from "../../styles/Home/Content.module.css";
import Context from "../../context/index-store";
import { ComicsGrid } from "../Comics/ComicsGrid";
import { ErrorMessage } from "../Comics/ErrorMessage";
import { LoadingMessage } from "../Comics/LoadingMessage";
import { Favorites } from "../Favorites/Favorites";
import { Filter } from "./Filter";
import { IntroTextBox } from "./IntroTextBox";

export const Content = () => {
    const context = useContext(Context);
    
    return (
        <div className={`${classes["content"]}`}>
            <IntroTextBox />
            <div className={`${classes["body"]}`}>
                <div className={`${classes["body__left"]}`}>
                    <Filter />
                    {context.isLoading && <LoadingMessage />}
                    {context.hasError && <ErrorMessage />}
                    {!context.isLoading &&
                        !context.hasError &&
                        context.isSuccess && <ComicsGrid />}
                </div>
                <div className={`${classes["body__right"]}`}>
                    <Favorites
                        className="desktop"
                        closeFavoritesHandler={null}
                    />
                </div>
            </div>
        </div>
    );
};
