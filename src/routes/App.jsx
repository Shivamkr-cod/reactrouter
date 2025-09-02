import Header from "./component/header";
import Footer from "./component/footer";
import Sidebar from "./component/sidebar";
// import Postlist from "./component/postlist";
// import Createpost from "./component/Createpost";
import {Outlet} from "react-router-dom";
import Postlistprovider from "./store/postliststore";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <Postlistprovider>
      <div className="main">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
         <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </Postlistprovider>
  );
}

export default App;
