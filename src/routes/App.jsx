import Header from "../component/component/header.jsx";
import Footer from "../component/component/footer.jsx";
import Sidebar from "../component/component/sidebar.jsx";
import { Outlet } from "react-router-dom";
import PostlistProvider from "../store/postliststore.jsx"; 
import "../routes/App.css";
import { useState } from "react";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="main">
        <Sidebar 
          selectedtab={selectedtab} 
          setselectedtab={setselectedtab} 
        />
        <div className="content">
          <Header />
          <Outlet />   
          <Footer />
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
