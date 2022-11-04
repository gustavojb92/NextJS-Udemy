import Head from "next/head";
import Image from "next/image";
import styles from "./posts.module.css";

export default function Hello() {
  return (
    <>
      <Head>
        <title>Primeiro Post</title>
        <meta property="og:tittle" content="Primeiro Post"/>
      </Head>
      <article>
        <Image
          src="/posts/Primeiro-Post/perfil.jpg"
          alt="perfil"
          className={styles.perfil}
          width={200}
          height={200}
        />
        <aside>
          <h1>Hello!</h1>
        </aside>
      </article>
    </>
  );
}
