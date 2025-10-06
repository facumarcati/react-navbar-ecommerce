import CartWidget from "./CartWidget";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.topRow}>
        <Logo className={styles.logo} />
        <CartWidget className={styles.cart} />
      </div>
      <NavLinks className={styles.navlinks} />
    </nav>
  );
};

export default NavBar;
