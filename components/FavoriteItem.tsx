import Image from "next/image";
import React, { useContext } from "react";
import Context from "../context/index-store";
import classes from "../styles/FavoriteItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";

export const FavoriteItem = ({ title, issue, thumbnail }) => {
    return (
        <div className={`${classes["item"]}`}>
            <div className={`${classes["item__thumbnail"]}`}>
                <Image
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                    alt={title}
                    width={50}
                    height={75}
                />
                <button className={`${classes["item__remove"]}`}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className={`${classes["item__remove-icon"]}`}
                    />
                </button>
            </div>
            <div className={`${classes["item__content"]}`}>
                <h3 className={`${classes["item__content-title"]}`}>{title}</h3>
                <p className={`${classes["item__content-issue"]}`}>
                    Issue: <span>{issue}</span>
                </p>
            </div>
        </div>
    );
};
