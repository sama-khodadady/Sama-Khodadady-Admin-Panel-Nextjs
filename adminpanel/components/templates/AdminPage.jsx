import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Loader from "../modules/Loader";
import Search from "../modules/admin/Search";
import { useAuth } from "@/context/AuthContext";
import AddModal from "../modules/admin/AddModal";
import { useProducts } from "../../hooks/queries";
import Pagination from "../modules/admin/Pagination";
import DeleteModal from "../modules/admin/DeleteModal";
import ProductsList from "../modules/admin/ProductsList";
import { useMultipleDelete } from "../../hooks/mutation";
import { createQueryObj, searchProducts } from "../../utils/search";

import styles from "./AdminPage.module.css";

function AdminPage() {
  const router = useRouter();
  const [ids, setIds] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", quantity: "" });
  const { page, query, setQuery, addModal, setAddModal, isDelete } = useAuth();

  const { data, refetch, isFetching, error } = useProducts(page);
  const productsData = data?.data?.data;

  if (error?.code === "ERR_NETWORK")
    toast.error("مشکلی از سمت سرور بوجود آمده است،لطفا بعدا تلاش کنید!");

  const { mutate } = useMultipleDelete();

  useEffect(() => {
    setDisplay(productsData);
  }, [productsData]);

  useEffect(() => {
    router.push({ pathname: "/admin", query });
    let finalProducts = searchProducts(productsData, search);
    setDisplay(finalProducts);
  }, [query]);

  useEffect(
    () => setQuery((query) => createQueryObj(query, { search })),
    [search]
  );

  //delete handler
  const deleteAllHandler = () => {
    mutate(ids, {
      onSuccess: () => toast.success("محصولات با موفقیت حذف شدند!"),
      onError: (error) => {
        if (error.status === 404) toast.error("محصولی برا حذف یافت نشد!");
        if (error.status === 403)
          toast.error(
            "شما مجاز به حذف نیستید،لطفا دوباره وارد اکانت خود شوید!"
          );
      },
    });
  };

  return (
    <div className={styles.admin}>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.actions}>
        <div className={styles.title}>
          <img src="/assets/images/setting.svg" alt="setting" />
          <h2>مدیریت کالا</h2>
        </div>
        <div className={styles.buttons}>
          <button onClick={deleteAllHandler}>حذف</button>
          <button onClick={() => setAddModal(true)}>افزودن محصول</button>
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {error?.status === 400 ? (
              <tr className={styles.notfound}>
                <td colSpan="5">محصولی یافت نشد! </td>
              </tr>
            ) : isFetching ? (
              <tr>
                <td>
                  <Loader />
                </td>
              </tr>
            ) : (
              display?.map((item) => (
                <ProductsList
                  key={item.id}
                  data={item}
                  setForm={setForm}
                  ids={ids}
                  setIds={setIds}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination />
      {addModal && <AddModal form={form} setForm={setForm} refetch={refetch} />}

      {isDelete && <DeleteModal />}
    </div>
  );
}

export default AdminPage;
