import Image from "next/image";
import Link from "next/link";
import logoPequena from "../../public/assets/logo-pequena.png";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image width={40} height={40} alt="" src={logoPequena} />
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
            <li className="nav-item">
              <span style={{color:"#fff"}} className="nav-link">
                <Link href="/">HOME</Link>
              </span>
            </li>
            <li className="nav-item">
              <span style={{color:"#fff"}} className="nav-link">
                <Link href="/about">SOBRE</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
