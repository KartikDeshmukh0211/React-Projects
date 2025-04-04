import styles from "./Navbar.module.css";

export default function NavBar() {
  // console.log(styles);
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <img src="images/logo.svg" alt="" />
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
