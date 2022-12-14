import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Pagination = ({
    range,
    totalNumberOfComics,
    currentPage,
    setCurrentPage,
    reachedTheEnd
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

    const showLeftChevron = currentPage > 0 && true;
    const showRightChevron = reachedTheEnd;

    return (
        <div>
            {showLeftChevron && (
                <button onClick={onLeftChevronClickHandler}>
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ width: "20px" }}
                    />
                </button>
            )}
            <span>
                {range.start}-{range.end}
            </span>{" "}
            of {totalNumberOfComics}
            {showRightChevron && (
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
