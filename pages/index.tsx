import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { StarshipList } from "../components/startship-list";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://swapi.dev/api/people/1",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      hello {data.name}!
      <StarshipList starshipURLs={data.starships} />
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Ciani Andrea - Starwars API</title>
        <meta name="description" content="Interview project by Andrea Ciani" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>

        <div>
          <Button variant="contained">Hello World</Button>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Example Card</h2>
            <p>Let's keep this for later</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        No copyright for this example project!
      </footer>
    </div>
  );
}
