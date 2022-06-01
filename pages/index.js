import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
  setTimeout(() => {
  router.push('https://nagagg.top/');
  }, 2000);

  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>NagaGG landing</title>
        <meta name="description" content="situs slot gacor nagagg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat Datang Di NagaGG !!
        </h1>

        <p className={styles.description}>
        Harap tunggu. Anda akan diarahkan ke halaman tujuan dalam 2 detik !!
        </p>

       
      </main>

      <footer className={styles.footer}>
          Made With Love By {'Cendol Cilok '}          
      </footer>
    </div>
  )
}
