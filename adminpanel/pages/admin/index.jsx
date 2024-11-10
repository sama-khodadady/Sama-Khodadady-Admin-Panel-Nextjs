import Head from "next/head";

import AuthProvider from "@/providers/AuthProvider";
import AdminPage from "@/components/templates/AdminPage";

function Admin() {
  return (
    <>
      <AuthProvider>
        <Head>
          <title>پنل مدیر</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/images/logo.svg" />
        </Head>
        <AdminPage />;
      </AuthProvider>
    </>
  );
}

export default Admin;