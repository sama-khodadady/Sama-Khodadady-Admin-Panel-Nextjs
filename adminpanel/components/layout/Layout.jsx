import Link from "next/link";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { e2p } from "../../utils/number";
import { useCart } from "../../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <Link href="/" className={styles.shop}>
            فروشگاه
          </Link>
          <Link href="/signup" className={styles.admin}>
            پنل مدیران
          </Link>
        </div>
        <Link href="/checkout">
          <div className={styles.checkout}>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{e2p(state.itemsCounter)}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          چالش از <a href="https://botostart.ir/">بوتواستارت</a> | توسعه یافته
          توسط <a href="https://github.com/sama-khodadady">سما خدادادی</a>
          &#128150;
        </p>
      </footer>
    </>
  );
}

export default Layout;
