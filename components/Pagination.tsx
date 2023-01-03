import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import classes from "../styles/Pagination.module.css";

export const Pagination = ({
    range,
    totalNumberOfComics,
    totalNumberOfCurrentComics,
    currentPage,
    setCurrentPage,
    disableRightPagination,
}) => {
    const onLeftChevronClickHandler = () => {
        setCurrentPage((prev) => {
            return prev - 1;
        });
    };
    const onRightChevronClickHandler = () => {
        setCurrentPage((prev) => {
            return prev + 1;
        });
    };

    const disableLeftChevron = currentPage !== 1;
    const disableRightChevron = disableRightPagination;

    console.log(`
    range.start ${range.start}
    range.end ${range.end}
    `)

    let start = range.start + 1;
    if (totalNumberOfComics === 0) {
        start = 0;
    }

    let end = range.end;
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
