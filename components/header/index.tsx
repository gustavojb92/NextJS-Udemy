import styles from "./header.module.css";
import logoTexto from "@public/assets/logo-texto.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.container}>
      <div style={{ marginLeft: "2rem" }}>
        <h1>Seja bem-vindo ao JB DEV</h1>
        <p>
          Aqui você acompanhara como me tornei desenvolvedor e vai ter um
          pouquinho da noção de como é a vida de um programador desde os
          primeiros passos.
        </p>
        <p>Acompanhe abaixo as nossas postagens!</p>
      </div>
      <div>
        <Image src={logoTexto} alt="logo" width={400} height={400} />
      </div>
    </header>
  );
}
