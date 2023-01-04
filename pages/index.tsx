import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciani Andrea - Starwars API</title>
        <meta name="description" content="Interview project by Andrea Ciani" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

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
  )
}
