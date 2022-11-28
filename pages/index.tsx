import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Comic } from "../components/Comic";
import useRequest from "../hooks/use-request";
import { useEffect, useState } from "react";
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

    useEffect(() => {
        fetchData({ endpoint: getMarvelComicsResourceUrl() })
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

    return (
        <div className={styles.container}>
            <Head>
                <title>Warren's Marvel App</title>
                <meta
                    name="description"
                    content="Warren's React Training Project"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {isLoading && <h1>Loading comics...</h1>}
                {hasError && (
                    <p>
                        Something went wrong. Unable to retrieve comics.
                        {hasError}
                    </p>
                )}
                {!isLoading && !hasError && isSuccess && (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(183px, 1fr))",
                            gap: "60px 26px",
                            width: "100%",
                        }}
                    >
                        {comics.map((comic) => {
                            return <Comic key={comic.id} comicData={comic} />;
                        })}
                    </div>
                )}
            </main>

            <footer></footer>
        </div>
    );
}
