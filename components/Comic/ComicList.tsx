import React, { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { Comic } from "./Comic";

export const ComicList = ({ comics }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(15);

    // Reset to page 1 when the user changes page
    useEffect(() => {
        setCurrentPage(1);
    }, []);

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
    // if (indexOfLastComic > comics.length) {
    //     indexOfLastComic =
    //         indexOfLastComic - indexOfFirstComic + currentComics.length;
    // }

    return (
        <>
            <Pagination
                range={{
                    start: indexOfFirstComic,
                    end:
                        indexOfLastComic > comics.length
                            ? indexOfLastComic -
                              indexOfFirstComic +
                              currentComics.length
                            : indexOfLastComic,
                }}
                totalNumberOfComics={comics.length}
                totalNumberOfCurrentComics={currentComics.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                disableRightPagination={disableRightPagination}
            />
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(183px, 1fr))",
                    gap: "60px 26px",
                    width: "100%",
                }}
            >
                {currentComics.map((comic) => {
                    return <Comic key={comic.id} comicData={comic} />;
                })}
            </div>
        </>
    );
};
