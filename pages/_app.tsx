import type { AppProps } from "next/app";
import { ThemeProviderUI } from "../components/context/theme";



function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderUI>
      <Component {...pageProps} />
    </ThemeProviderUI>
  );
}

export default App;
