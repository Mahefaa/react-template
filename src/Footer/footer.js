import './footer.css';
import '../bootstrap-4.6.1-dist/css/bootstrap.css'
export default function Footer(props){
return(
    <footer className={"jumbotron d-flex"}>
        <div className={""}>
            <p>@Copyright Toky Transport Powered by HEI Tech</p>
        </div>
        <div className={""}>
            <a href="#">Terms of use</a>
        </div>
    </footer>
);
}