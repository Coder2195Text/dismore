import type { AppProps } from "next/app";
import "../styles/global.css";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import AppNav from "../components/appNav/AppNav";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <AppNav />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
