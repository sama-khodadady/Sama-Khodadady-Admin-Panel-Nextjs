import Link from "next/link";

import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.svg}>
        <img src="/assets/images/404.svg" alt="404" className={styles.number} />
        <img
          src="/assets/images/world.svg"
          alt="world"
          className={styles.world}
        />
        <img
          src="/assets/images/astronout.svg"
          alt="astronout"
          className={styles.astronout}
        />
        <img
          src="/assets/images/spaceship.svg"
          alt="spaceship"
          className={styles.spaceship}
        />
      </div>
      <div className={styles.actions}>
        <h2>صفحه مورد نظر یافت نشد!</h2>
        <Link href="/">برگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
