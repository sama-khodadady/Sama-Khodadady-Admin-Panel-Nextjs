import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";

import { sp } from "@/utils/number";
import Layout from "@/components/layout/Layout";
import Loader from "@/components/modules/Loader";

import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage(product) {
  if (!product) return <Loader />;

  return (
    <Layout>
      <div className={styles.details}>
        <img src="/assets/images/tshirt.jfif" alt={product.name} />
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p className={styles.description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <div>
            <span className={styles.price}>
              <span>{sp(product.price)} تومان </span>
              <IoMdPricetag />
            </span>
            <Link href="/">
              <span>بازگشت</span>
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetailsPage;
