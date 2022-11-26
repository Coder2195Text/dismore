import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className=" text-center pt-3">
      <Head>
        <title>Dismore - Explore Servers</title>
        <meta name="description" content="Check out other people's servers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row mx-1">
        <h2>Explore public servers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          sapiente autem! Ducimus perferendis animi, earum eaque ipsum, est
          repudiandae nesciunt, tempore odio optio minima esse. Error eos
          ratione at amet!
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
