import "../styles/globals.css";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }) {
  useDarkMode();

  return <Component {...pageProps} />;
}

export default MyApp;
