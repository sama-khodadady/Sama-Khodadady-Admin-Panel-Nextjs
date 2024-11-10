import Filter from "./Filter";
import { createQueryObj } from "@/utils/search";

import styles from "./Sidebar.module.css";

function Sidebar({ price, setPrice, search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObj(query, { search }));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <h4>جستجو</h4>
        <div>
          <input
            type="text"
            placeholder="جستجو محصول"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
          />
          <button onClick={searchHandler}>جستجو</button>
        </div>
      </div>
      <Filter price={price} setPrice={setPrice} />
    </div>
  );
}

export default Sidebar;
