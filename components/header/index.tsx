import styles from "./header.module.css";
import logoTexto from "@public/assets/logo-texto.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.container}>
      <div style={{marginLeft:"2rem"}}>
        <h1>Seja bem-vindo ao JB DEV</h1>
        <p>
          Aqui você acompanhra umpouca da minha jornada de comome tornei
          desenvolvedor e vai ter umpouquinho da noção de como é essa vida
        </p>
        <p>Acompanhe abaixo as nossas postagens!</p>
      </div>
      <div>
        <Image src={logoTexto} alt="logo" width={400} height={400} />
      </div>
    </header>
  );
}
