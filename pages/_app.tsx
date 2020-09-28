import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import Header from "../components/Header";
import "../styles/globals.css";

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Component {...pageProps} />
        </div>
        <ReactQueryDevtools initialIsOpen />
      </>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
