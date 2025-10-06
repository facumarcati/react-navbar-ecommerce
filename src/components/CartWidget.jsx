import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <span>🛒</span>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
