import Head from "next/head";
import classes from "../styles/Home.module.css";
import { Comic } from "../components/Comic/Comic";
import useRequest from "../hooks/use-request";
import { useEffect, useState } from "react";
import { ComicData } from "../types/shared_types";
import { Filter } from "../components/Filter";
import Context from "../context/index-store";
import { Header } from "../components/Header";
import { ComicList } from "../components/Comic/ComicList";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
    const {
        getMarvelComicsResourceUrl,
        fetchData,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        hasError,
        setHasError,
    } = useRequest();
    const [comics, setComics] = useState<ComicData[]>([]);
    const [favorites, setFavorites] = useState<ComicData[]>([]);

    useEffect(() => {
        const favoriteComics = localStorage.getItem('favorite_comics');
        if (favoriteComics) {
            setFavorites(JSON.parse(favoriteComics));
        }
    }, []);

    useEffect(() => {
        fetchData({ endpoint: getMarvelComicsResourceUrl("https://gateway.marvel.com/v1/public/comics?") })
            .then((data) => {
                console.log(data);
                setComics(data.data.results);
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch((error) => {
                setHasError(error);
                setIsSuccess(false);
                setIsLoading(false);
            });
    }, []);

    const ctx = {
        comics,
        setComics,
        favorites,
        setFavorites
    };

    return (
        <div>
            <Head>
                <title>Warren's Marvel App</title>
                <meta
                    name="description"
                    content="Warren's React Training Project"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Context.Provider value={ctx}>
                <Header />
                <main className={`${classes["main"]}`}>
                    <Hero />
                    {isLoading && <h1 data-testid="loading">Loading comics...</h1>}
                    {hasError && (
                        <p>
                            Something went wrong. Unable to retrieve comics.
                            {hasError}
                        </p>
                    )}
                    {!isLoading && !hasError && isSuccess && (
                        <>
                            <Filter />
                            <ComicList comics={comics}/>
                        </>
                    )}
                </main>
                <Footer />
            </Context.Provider>
        </div>
    );
}
