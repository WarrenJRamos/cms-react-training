import React from "react";
import classes from "../../styles/Home/FilterDropdowns.module.css";


export const FilterDropdowns = ({selectedCharacter, onCharacterChange, characterFilterOptions, selectedCreator, onCreatorChange, creatorFilterOptions, className}) => {
    return (
        <div className={`${classes[className]}`}>
            <select
                value={selectedCharacter}
                onChange={onCharacterChange}
                className={`${classes["dropdown"]}`}
            >
                {characterFilterOptions.map((charOption) => {
                    return (
                        <option value={charOption.value} key={charOption.value}>
                            {charOption.text}
                        </option>
                    );
                })}
            </select>
            <select
                value={selectedCreator}
                onChange={onCreatorChange}
                className={`${classes["dropdown"]}`}
            >
                {creatorFilterOptions.map((creatorOption) => {
                    return (
                        <option
                            value={creatorOption.value}
                            key={creatorOption.value}
                        >
                            {creatorOption.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
