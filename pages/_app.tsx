import "../app/globals.css";
import { MoralisProvider } from "react-moralis";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoralisProvider
        // appId={APP_ID}
        // serverUrl={SERVER_URL}
        initializeOnMount={false}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
}

export default MyApp;
