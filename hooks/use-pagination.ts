import { useEffect, useState } from "react";
import { ComicData } from "../types/shared_types";

export const usePagination = (comicsData: ComicData[]) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(15);
    const comics: ComicData[] = comicsData;

    // Reset to page 1 when the user changes page or when the filter is changed
    useEffect(() => {
        setCurrentPage(1);
    }, [comics]);

    // Get current comics
    const indexOfLastComic: number = currentPage * productsPerPage;
    const indexOfFirstComic: number = indexOfLastComic - productsPerPage;
    const disableRightPagination: boolean = indexOfLastComic < comics.length;
    // Map through currentComics instead of comics
    const currentComics: ComicData[] = comics.slice(
        indexOfFirstComic,
        indexOfLastComic
    );

    return {
        currentPage,
        setCurrentPage,
        disableRightPagination,
        indexOfFirstComic,
        indexOfLastComic,
        currentComics,
        comics
    };
};