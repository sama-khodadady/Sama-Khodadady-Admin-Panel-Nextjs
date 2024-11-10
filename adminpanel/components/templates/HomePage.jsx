import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/layout/layout";
import Loader from "@/components/modules/Loader";
import Card from "@/components/modules/shop/Card";
import Sidebar from "@/components/modules/shop/Sidebar";
import Pagination from "@/components/modules/admin/Pagination";

import styles from "./HomePage.module.css";

function HomePage(props) {
  const { products, error, isData } = props;
  const router = useRouter();
  const [price, setPrice] = useState({ min: "", max: "" });
  const [search, setSearch] = useState("");
  const { setQuery, query } = useAuth();

  useEffect(() => {
    router.push({ pathname: "/", query });
  }, [query]);

  return (
    <Layout>
      <div className={styles.container}>
        {!isData && !error ? (
          <Loader />
        ) : (
          <div className={styles.main}>
            <Sidebar
              price={price}
              setPrice={setPrice}
              setQuery={setQuery}
              search={search}
              setSearch={setSearch}
            />
            <div className={styles.mainContent}>
              {error?.status === 400 || !products.length ? (
                <div className={styles.emptyProduct}>
                  <p>محصولی در این صفحه یافت نشد!</p>
                  <img src="/assets/images/emptyshop.svg" alt="empty" />
                </div>
              ) : (
                products?.map((product) => (
                  <Card key={product.id} data={product} />
                ))
              )}
            </div>
          </div>
        )}
        <Pagination />
      </div>
    </Layout>
  );
}

export default HomePage;
