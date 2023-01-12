import { Creator } from "../../types/shared_types";

type getCreatorsFn = (creators: Creator) => string;

type getDateFn = (publishDate: string) => string;

export const getCreators: getCreatorsFn = (creators) => {
    const creatorsGroup: string[] = creators.items.map((creator) => {
        const lastName = creator.name.split(" ")[1];
        return lastName;
    });
    const creatorsFormatted: string =
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
    const date: Date = new Date(publishDate);
    const month: string = monthNames[date.getMonth()];
    const dateNumber: number = date.getDate();
    const year: number = date.getFullYear();
    return `${month} ${dateNumber}, ${year}`;
};
