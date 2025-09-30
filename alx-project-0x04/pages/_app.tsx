import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose only the weights you need
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
