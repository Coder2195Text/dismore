import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Dismore</title>
        <meta name="description" content="Disboard clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row text-center pt-3">
        <h2>Think of a place...</h2>
        <p>...Where your servers and emojis come to life.</p>
        <p>Thats what Dismore is. A place for bringing your dreams to life.</p>
        <p>
          Note: This is a junior developer's WIP, don't use this an offical
          disboard/emoji.gg replacement.
        </p>
      </div>
    </div>
  );
};

export default Home;
