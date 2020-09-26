import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
