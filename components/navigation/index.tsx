import Image from "next/image";
import Link from "next/link";
import styles from "./navigation.module.css";
import logoPequena from "../../public/assets/logo-pequena.png"

const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sobre",
    path: "/about",
  },
];

interface NavAnchorProps {
  path: string;
  children: string;
}

function NavAnchor({ path, children }: NavAnchorProps) {
  return (
    <Link href={path}>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image width={40} height={40} alt='' src={logoPequena}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {LINKS.map(({ name, path }) => (
                <li className="nav-item" key={path}>
                  <a className="nav-link" href={path}>{name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
