import "./App.css";
import PagesLink from "./components/Routes/PagesLink";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>KhasanMeliev</title>
        <link
          rel="canonical"
          href="https://assets.teenvogue.com/photos/5e90937f266e350008c5107a/16:9/w_2560%2Cc_limit/gfx_alecb_022%2520copy.jpg"
        />
      </Helmet>
      <div className="box"></div>
      <Navbar />
      <PagesLink />
    </div>
  );
}

export default App;
