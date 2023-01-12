import React, { useContext } from "react";
import classes from "../../styles/Comics/ComicsGrid.module.css";
import Context from "../../context/index-store";
import { Pagination } from "./Pagination";
import { ComicGridItem } from "./ComicGridItem";
import { NoComicsMessage } from "./NoComicsMessage";
import { usePagination } from "../../hooks/use-pagination";

export const ComicsGrid = () => {
    const context = useContext(Context);
    const {
        currentPage,
        setCurrentPage,
        disableRightPagination,
        indexOfFirstComic,
        indexOfLastComic,
        currentComics,
        comics
    } = usePagination(context.comics);

    if (comics.length === 0) {
        return <NoComicsMessage />
    }

    return (
        <>
            <div className={`${classes["grid"]}`}>
                {currentComics.map((comic) => {
                    return <ComicGridItem key={comic.id} comicData={comic} />;
                })}
            </div>
            <Pagination
                range={{
                    start: indexOfFirstComic,
                    end: indexOfLastComic,
                }}
                totalNumberOfComics={comics.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                disableRightPagination={disableRightPagination}
            />
        </>
    );
};
