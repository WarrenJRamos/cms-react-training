import { createContext } from "react";
import { ComicData } from "../types/shared_types";

interface AppContextInterface {
    comics: ComicData[];
    setComics: React.Dispatch<React.SetStateAction<ComicData[]>>;
    favorites: ComicData[];
    setFavorites: React.Dispatch<React.SetStateAction<ComicData[]>>;
}

const Context = createContext<AppContextInterface | null>(null)

export default Context;