import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { comics } from "../data";
import { Comic } from '../components/Comic';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warren's Marvel App</title>
        <meta name="description" content="Warren's React Training Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "183px 183px 183px 183px 183px",
          gap: "60px 26px",
        }}>
          {
            comics.map((comic) => {
              return <Comic key={comic.id} comicData={comic} />
            })
          }
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
