import { canSSRAuth } from "../../utils/canSSRAuth";
import Head from "next/head";

import { Header } from "../../components/Header";

export default function Dashboard() {
  return (
    <>
    <Head>
      <title>Painel - Pizzaria</title>
    </Head>
      <div>
        <Header />
        <h1>Bem vindo ao painel</h1>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
