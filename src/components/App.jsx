
import HeaderComp from "./HeaderComp";
import BodyComp from "./BodyComp";
import FooterComp from "./FooterComp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <body style={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <HeaderComp />
        <BodyComp />
        <FooterComp />
      </BrowserRouter>
    </body>
  );
}

export default App;


