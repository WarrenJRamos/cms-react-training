import React from "react";
import classes from "../../styles/Comics/Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

type chevronClickHandlerFn = () => void;

export const Pagination = ({
    range,
    totalNumberOfComics,
    totalNumberOfCurrentComics,
    currentPage,
    setCurrentPage,
    disableRightPagination,
}) => {
    const onLeftChevronClickHandler: chevronClickHandlerFn = () => {
        setCurrentPage((prev: number) => {
            return prev - 1;
        });
    };
    const onRightChevronClickHandler: chevronClickHandlerFn = () => {
        setCurrentPage((prev: number) => {
            return prev + 1;
        });
    };

    const disableLeftChevron: boolean = currentPage !== 1;
    const disableRightChevron: boolean = disableRightPagination;

    console.log(`
    range.start ${range.start}
    range.end ${range.end}
    `);

    let start: number = range.start + 1;
    if (totalNumberOfComics === 0) {
        start = 0;
    }

    let end: number = range.end;
    if (range.end > totalNumberOfComics) {
        end = totalNumberOfComics;
    }

    return (
        <div className={`${classes["pagination"]}`}>
            <button
                onClick={onLeftChevronClickHandler}
                className={`${classes["pagination__arrow"]}`}
                disabled={!disableLeftChevron}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>
                {start}-{end}
                &nbsp;of {totalNumberOfComics}
            </span>
            <button
                onClick={onRightChevronClickHandler}
                className={`${classes["pagination__arrow"]}`}
                disabled={!disableRightChevron}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};
