import React, { useState } from "react";
import { Pagination } from "../Pagination";
import { Comic } from "./Comic";

export const ComicList = ({ comics }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(15);

    // Reset to page 1 when the user changes page
    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [props.])

    // Get current comics
    const indexOfLastComic = currentPage * productsPerPage;
    const indexOfFirstComic = indexOfLastComic - productsPerPage;
    console.log(`${indexOfLastComic} >= ${comics.length} : ${indexOfLastComic >= comics.length}`)
    const reachedTheEnd = indexOfLastComic >= comics.length;
    // Map through currentComics instead of comics
    const currentComics = comics.slice(indexOfFirstComic, indexOfLastComic);
    console.log(`Page: ${currentPage}`);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(183px, 1fr))",
                gap: "60px 26px",
                width: "100%",
            }}
        >
            {/* <Pagination
                range={{ start: indexOfFirstComic, end: indexOfLastComic }}
                totalNumberOfComics={comics.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                reachedTheEnd={reachedTheEnd}
            /> */}
            {comics.map((comic) => {
                return <Comic key={comic.id} comicData={comic} />;
            })}
        </div>
    );
};
