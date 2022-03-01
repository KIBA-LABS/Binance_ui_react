import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Components1/Navbar/Navbar";
//import Landingpage from "./Components/Pages/LandingPage/Landingpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import drawer from "./Components/Components1/Drawer/drawer";
import drawer from "./Components/Components1/Drawer/drawer";
import Earning from "./Components/Pages/Orderpage/Orders";
import Landingpage from "./Components/Pages/LandingPage/Landingpage";
import Ethereum from "./Components/Pages/Ethereumpage/Ethereum";
import Funding from "./Components/Pages/Fundingpage/Funding";
import Buypage from "./Components/Pages/Buypage/Buypage";
import Orders from "./Components/Pages/Orderpage/Orders";
import Login from "./Components/Pages/Login/Login";
import Earn from "./Components/Pages/EarnPage/Earn";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Landingpage /> */}
      </div>

      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/fund" exact component={Funding} />
        <Route path="/login" exact component={Login} />
        <Route path="/order" exact component={Orders} />
        <Route path="/ethereum" exact component={Ethereum} />
        <Route path="/buy" exact component={Buypage} />
        <Route path="/earn" exact component={Earn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
