import Head from "next/head";
import Cards from "./components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Cards />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #fcfcfc;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
