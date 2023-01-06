import React, { useContext } from "react";
import Context from "../../context/index-store";
import classes from "../../styles/Home/Content.module.css";
import { ComicsGrid } from "../Comics/ComicsGrid";
import { Favorites } from "../Favorites/Favorites";
import { Filter } from "../Filter";
import { IntroTextBox } from "./IntroTextBox";

export const Content = () => {
    const context = useContext(Context);
    return (
        <div className={`${classes["content"]} ${classes["container"]}`}>
            <IntroTextBox />
            <div className={`${classes["body"]}`}>
                <div className={`${classes["body__left"]}`}>
                    <Filter />
                    {context.isLoading && (
                        <h1 data-testid="loading">Loading comics...</h1>
                    )}
                    {context.hasError && (
                        <p>
                            Something went wrong. Unable to retrieve comics.
                            {context.hasError}
                        </p>
                    )}
                    {!context.isLoading && !context.hasError && context.isSuccess && (
                        <ComicsGrid comics={context.comics} />
                    )}
                </div>
                <div className={`${classes["body__right"]}`}>
                    <Favorites />
                </div>
            </div>
        </div>
    );
};
