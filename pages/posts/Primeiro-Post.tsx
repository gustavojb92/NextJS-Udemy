import Head from "next/head";
import Image from "next/image";
import styles from "@shared/posts.module.css";

export default function Hello() {
  return (
    <>
      <Head>
        <title>Primeiro Post</title>
        <meta property="og:tittle" content="Primeiro Post" />
      </Head>
      <div className={styles.bodySized}>
        <div className={styles.gridTwo}>
          <div>
            <Image
              src="/posts/Primeiro-Post/perfil.jpg"
              alt="perfil"
              className={styles.perfil}
              width={200}
              height={200}
            />
          </div>
          <div>
            <h1>Olá!</h1>
            <p>Meu nome é Gustavo Jardim de Barros, tenho 30 anos e aos 29 decidi mudar de carreira.</p>
            <p>Com essa decisão acabei entrando para umprojeto chamado SERRATEC e comecei a minha caminhada como dev.</p>
          </div>
        </div>
      </div>
    </>
  );
}
