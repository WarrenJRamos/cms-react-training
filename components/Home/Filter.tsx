import React, {
    useContext,
    useState,
} from "react";
import classes from "../../styles/Home/Filter.module.css";
import Context, { AppContextInterface } from "../../context/index-store";
import { faBoltLightning, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Favorites } from "../Favorites/Favorites";
import { FilterDropdowns } from "./FilterDropdowns";
import { useFilter } from "../../hooks/use-filter";

type filterClickHandlerFn = () => void;

export const Filter = () => {
    const context = useContext<AppContextInterface>(Context);
    const {
        selectedCharacter,
        onCharacterChange,
        characterFilterOptions,
        selectedCreator,
        onCreatorChange,
        creatorFilterOptions,
    } = useFilter(context);

    const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
    const [showMobileFavorites, setShowMobileFavorites] = useState<boolean>(false);

    const mobileFilterClickHandler: filterClickHandlerFn = () => {
        setShowMobileFilter((prev) => !prev);
    };

    const mobileFavoritesClickHandler: filterClickHandlerFn = () => {
        setShowMobileFavorites((prev) => !prev);
    };

    return (
        <div className={`${classes["filter"]}`}>
            <span className={`${classes["filter__header"]}`}>Filter by:</span>
            <div
                className={`${classes["filter__header"]} ${classes["filter__header--mobile"]}`}
            >
                <div>
                    <button
                        onClick={mobileFilterClickHandler}
                        className={`${classes["filter-btn"]}`}
                    >
                        <span>Filter</span>
                        <FontAwesomeIcon icon={faFilter} />
                    </button>
                    {showMobileFilter && (
                        <FilterDropdowns
                            selectedCharacter={selectedCharacter}
                            onCharacterChange={onCharacterChange}
                            characterFilterOptions={characterFilterOptions}
                            selectedCreator={selectedCreator}
                            onCreatorChange={onCreatorChange}
                            creatorFilterOptions={creatorFilterOptions}
                            className="mobile"
                        />
                    )}
                </div>
                <div>
                    <button
                        className={`${classes["favorites-btn"]}`}
                        onClick={mobileFavoritesClickHandler}
                    >
                        {!showMobileFavorites && <span>Show Favorites</span>}
                        {showMobileFavorites && <span>Hide Favorites</span>}
                        <FontAwesomeIcon icon={faBoltLightning} />
                    </button>
                    {showMobileFavorites && (
                        <Favorites
                            className="mobile"
                            closeFavoritesHandler={mobileFavoritesClickHandler}
                        />
                    )}
                </div>
            </div>
            <FilterDropdowns
                selectedCharacter={selectedCharacter}
                onCharacterChange={onCharacterChange}
                characterFilterOptions={characterFilterOptions}
                selectedCreator={selectedCreator}
                onCreatorChange={onCreatorChange}
                creatorFilterOptions={creatorFilterOptions}
                className="desktop"
            />
        </div>
    );
};
