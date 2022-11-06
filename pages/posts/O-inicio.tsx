import Head from "next/head";
import Image from "next/image";
import styles from "@shared/posts.module.css";
import Navigation from "@components/navigation";

export default function Hello() {
  return (
    <>
      <Head>
        <title>Primeiro Post</title>
        <meta property="og:tittle" content="Primeiro Post" />
      </Head>
      <div>
        <Navigation />
        <div className={styles.bodySized}>
          <div className={styles.gridTwo}>
            <div className={styles.perfilContainer}>
              <Image
                src="/posts/Primeiro-Post/perfil.jpg"
                alt="perfil"
                className={styles.perfil}
                width={200}
                height={200}
              />
            </div>
            <div>
              <h1 style={{marginTop:"1rem"}}>O inicio!</h1>
              <h6>Publicado dia 05/11/2022</h6>
              <h5>Por Gustavo JB</h5>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              Meu nome é Gustavo Jardim de Barros, tenho 30 anos e aos 29 decidi
              mudar de carreira.
            </p>
            <p>
              Olá, o meu nome é Gustavo, tenho trinta anos (pelo menos hoje,
              na data em que escrevo) e sou de Teresópolis, cidade na região
              serrana do Rio de Janeiro. A minha vida como desenvolvedor com uma
              grande frase motivacional: &#8220;Até um pé na bunda te empurra
              para frente&#8221;. Fato. E foi após tomar um pé na bunda do meu
              antigo emprego que decidi começar a estudar programação novamente.
              Sim, novamente. Eu comecei há muitos anos uma faculdade de Ciência
              da Computação, não terminei. Mas sempre ficou aquela pontinha
              dentro de mim, querendo voltar. Volte mais de 10 anos depois.
            </p>
            <p>
              Trabalhei em algumas coisas bem diferentes do meu trabalho atual,
              fui vendedor em loja de instrumentos e componentes eletrônicos.
              Durante muito tempo trabalhei como garçom, era especialista em
              cervejas artesanais. Por último, antes dessa minha nova jornada,
              trabalhei em restaurante de um hotel, onde acabei virando
              recepcionista. E foi ali o pé na bunda que me empurrou para
              frente. Era a hora de parar de bater cabeça e mudar.
            </p>
            <p>
              Aqui na região serrana do Rio de Janeiro existe um programa de
              residência em TIC/Software chamado Serratec, com duração de 5
              meses, são mais de 700h de aula. Aproveitei o meu
              seguro-desemprego e a minha rescisão para poder entrar de cabeça
              no curso. E valeu muito a pena. Hoje sou Desenvolvedor na
              Alterdata Software e durante os meus estudos, me deparei com um
              curso de NextJS com deploy na Vercel, que aproveito para
              compartilhar aqui com vocês um pouco da minha caminhada. Muito
              obrigado por ler até aqui e até a próxima.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
