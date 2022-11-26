import type { AppProps } from "next/app";
import "../styles/global.css";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import AppNav from "../components/appNav/AppNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppNav />
      <Component {...pageProps} />
    </>
  );
}
