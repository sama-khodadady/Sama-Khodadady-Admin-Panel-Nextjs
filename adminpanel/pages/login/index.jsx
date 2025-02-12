import Head from "next/head";

import LoginForm from "@/components/templates/LoginForm";

function Login() {
  return (
    <>
      <Head>
        <title>ورود</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.svg" />
      </Head>
      <LoginForm />;
    </>
  );
}

export default Login;
