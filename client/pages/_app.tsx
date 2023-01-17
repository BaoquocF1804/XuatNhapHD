import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
