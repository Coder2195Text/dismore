import Head from "next/head";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Dismore - 404 Not Found</title>
        <meta name="description" content="We couldn't find this page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row text-center pt-3">
        <h2>(404 Not Found) Yeah you got us...</h2>
        <p>The site is called Dismore, but dis no more content here.</p>
        <p>We couldn't find the page that you are asking for...</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
