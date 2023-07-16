import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat, Mulish } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mulish.style.fontFamily};
        }
        body {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
