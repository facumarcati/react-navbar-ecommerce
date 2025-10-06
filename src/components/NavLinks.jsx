import styles from "./NavLinks.module.css";

const navLinks = () => {
  return (
    <ul className={styles.navLinks}>
      <li className={styles.links}>Inicio</li>
      <li className={styles.links}>Productos</li>
      <li className={styles.links}>Carrito</li>
    </ul>
  );
};

export default navLinks;
