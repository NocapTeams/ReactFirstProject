import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componnet/Header";
import Footer from "./componnet/Footer";
import Sidebar from "./componnet/Sidebar";
import CreatePost from "./componnet/CreatePost";
import PostList from "./componnet/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import BharatClock from "./componnet/BharatClock";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
         <PostList></PostList>
        ) :  selectedTab === "Bharat Clock" ?(
            <BharatClock></BharatClock>
        )
        :
        (
          <CreatePost></CreatePost>
        )}

        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
