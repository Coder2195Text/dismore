import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
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
          Note: This is a junior developer's WOP, don't use this an offical
          disboard/emoji.gg replacement.
        </p>
      </div>
    </div>
  );
}
