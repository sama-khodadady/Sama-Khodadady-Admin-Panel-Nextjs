import Head from "next/head";

import CheckoutPage from "@/components/templates/CheckoutPage";

function Checkout() {
  return (
    <>
      <Head>
        <title>سبد خرید</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.svg" />
      </Head>
      <CheckoutPage />;
    </>
  );
}

export default Checkout;
