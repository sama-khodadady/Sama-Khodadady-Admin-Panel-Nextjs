import { Toaster } from "react-hot-toast";

import AuthProvider from "@/context/AuthContext";
import CartProvider from "@/context/CartContext";
import QueryProvider from "@/providers/QueryProvider";

import "@/styles/global.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryProvider>
        <AuthProvider>
          <CartProvider>
            <Component {...pageProps} />
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </QueryProvider>
    </>
  );
}
