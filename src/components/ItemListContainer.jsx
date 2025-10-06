import styles from "./ItemListContainer.module.css";
import Saludo from "./Saludo.jsx";

const ItemListContainer = ({ saludo }) => {
  return (
    <div className={styles.container}>
      <Saludo text={saludo} />
    </div>
  );
};

export default ItemListContainer;
