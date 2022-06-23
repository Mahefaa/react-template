import "../bootstrap-4.6.1-dist/css/bootstrap.css";
import "./header.css";
import {useState} from "react";
export default function Header(props){
    const {user,setUser}=props
return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-info row">
            <div className={"col-4"}>
            </div>
            <a className="navbar-brand text-danger" href="#">Toky Transport</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{

            }}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Trip</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link">Informations</a>
                    <a className="nav-link">Help</a>
                    <a className="nav-link">Language</a>
                    <a className={"nav-link"} onClick={()=>setUser(user==="client"?"admin":"client")}>{user+" "}P.O.V</a>
                </div>
            </div>
        </nav>
    </header>
)
}