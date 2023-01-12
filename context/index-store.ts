import { createContext } from "react";
import { fetchDataFn, getMarvelComicsResourceUrlFn } from "../hooks/use-request";
import { ComicData } from "../types/shared_types";

export interface AppContextInterface {
    comics: ComicData[];
    setComics: React.Dispatch<React.SetStateAction<ComicData[]>>;
    favorites: ComicData[];
    setFavorites: React.Dispatch<React.SetStateAction<ComicData[]>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSuccess: boolean
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    hasError: boolean
    setHasError: React.Dispatch<React.SetStateAction<boolean>>;
    fetchData: fetchDataFn;
    getMarvelComicsResourceUrl: getMarvelComicsResourceUrlFn;
}

const Context = createContext<AppContextInterface | null>(null);

export default Context;
