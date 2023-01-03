import { Creator } from "../../types/shared_types";

type getCreatorsFn = (creators: Creator) => string;

type getDateFn = (publishDate: string) => string;

export const getCreators: getCreatorsFn = (creators) => {
    const creatorsGroup = creators.items.map((creator) => {
        return creator.name;
    });
    const creatorsFormatted =
        creatorsGroup.length > 0 ? creatorsGroup.join(", ") : "N/A";
    return creatorsFormatted;
};

export const getDate: getDateFn = (publishDate) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const date = new Date(publishDate);
    const month = monthNames[date.getMonth()];
    const dateNumber = date.getDate();
    const year = date.getFullYear();
    return `${month} ${dateNumber}, ${year}`;
};
