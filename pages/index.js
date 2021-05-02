import Head from "next/head";

import Welcome from "../components/welcome";

export default function Home() {
  return (
    <div className="bg-sky-pattern bg-cover flex h-screen">
      <Head>
        <title>Skyscanner</title>
      </Head>
      <div className="m-auto ">
        <h1 className="font-serif">Skyscanner</h1>
        <Welcome />
      </div>
    </div>
  );
}
