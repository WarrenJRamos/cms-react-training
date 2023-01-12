import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "../components/Home/Layout";
import Context from "../context/index-store";
import useRequest from "../hooks/use-request";
import { ComicData } from "../types/shared_types";

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
        const favoriteComics = localStorage.getItem("favorite_comics");
        if (favoriteComics) {
            setFavorites(JSON.parse(favoriteComics));
        }
    }, []);

    useEffect(() => {
        fetchData({
            endpoint: getMarvelComicsResourceUrl(
                "https://gateway.marvel.com/v1/public/comics?"
            ),
        })
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
        setFavorites,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        hasError,
        setHasError,
        fetchData,
        getMarvelComicsResourceUrl
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
                <Layout />
            </Context.Provider>
        </div>
    );
}
