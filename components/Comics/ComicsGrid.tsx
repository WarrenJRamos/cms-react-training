import React, { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { ComicGridItem } from "./ComicGridItem";
import classes from "../../styles/Comics/ComicList.module.css";

export const ComicsGrid = ({ comics }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(15);

    // Reset to page 1 when the user changes page or when the filter is changed
    useEffect(() => {
        setCurrentPage(1);
    }, [comics]);

    // Get current comics
    const indexOfLastComic = currentPage * productsPerPage;
    const indexOfFirstComic = indexOfLastComic - productsPerPage;
    const disableRightPagination = indexOfLastComic < comics.length;
    // Map through currentComics instead of comics
    const currentComics = comics.slice(indexOfFirstComic, indexOfLastComic);

    console.log(`
        Index of First Comic: ${indexOfFirstComic}
        Index of Last Comic: ${indexOfLastComic}
        Page: ${currentPage}
        Length of Current Comics: ${currentComics.length}
    `);

    return (
        <div className={`${classes["container"]}`}>
            <div className={`${classes["grid"]}`}>
                {currentComics.map((comic) => {
                    return <ComicGridItem key={comic.id} comicData={comic} />;
                })}
            </div>
            <Pagination
                range={{
                    start: indexOfFirstComic,
                    end: indexOfLastComic
                }}
                totalNumberOfComics={comics.length}
                totalNumberOfCurrentComics={currentComics.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                disableRightPagination={disableRightPagination}
            />
        </div>
    );
};
