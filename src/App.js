import './App.css';
import './bootstrap-4.6.1-dist/css/bootstrap.css'
import Header from "./Header/header";
import Footer from "./Footer/footer";
import {useState} from "react";
import Client from "./Client/Client";
import Server from "./Server/Server";
function App() {
    const [user,setUser]=useState("client");
  return (
          <div className={"App"}>
                <Header user={user} setUser={setUser}/>
              {user === "client" ? <Client/>:<Server/>}
                <Footer/>
          </div>
  );
}

export default App;
