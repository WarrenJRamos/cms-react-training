import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Pagination = ({
    range,
    totalNumberOfComics,
    totalNumberOfCurrentComics,
    currentPage,
    setCurrentPage,
    disableRightPagination
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

    let end = range.end;
    if (range.end > totalNumberOfComics) {
        end = range.end - totalNumberOfComics;
    }

    return (
        <div>
            {disableLeftChevron && (
                <button onClick={onLeftChevronClickHandler}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ width: "20px" }}
                    />
                </button>
            )}
            <span>
                {range.start}-{end}
            </span>{" "}
            of {totalNumberOfComics}
            {disableRightChevron && (
                <button onClick={onRightChevronClickHandler}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ width: "20px" }}
                    />
                </button>
            )}
        </div>
    );
};
