import './footer.css';
import '../bootstrap-4.6.1-dist/css/bootstrap-grid.css'
export default function Footer(props){
return(
    <footer className={"jumbotron d-flex mr-2 ml-2 mb-0 bg-info"}>
        <div className={"col"}>
            <p>@Copyright Toky Transport Powered by HEI Tech</p>
        </div>
        <div className={"col-7"}>
            <p>
                Any issue should be sent to :
                <a href={" mailto: tokyTransport.example.valid "}><strong>{" "}yourmail@example.valid </strong></a>
            </p>
        </div>
        <div className={"col"}>
            <a href="#">Terms of use</a>
        </div>
    </footer>
);
}