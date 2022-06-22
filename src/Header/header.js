import "../bootstrap-4.6.1-dist/css/bootstrap-grid.css";
import "./header.css"
export default function Header(props){
return(
    <header>
        <nav>
            <ul className={"container-fluid row"}>
                <li className={"col-2"}>
                    LOGO
                </li>

                <li className={"col-1"}>
                    <a href="#">Home</a>
                </li>

                <li className={"col-2"}>
                    <a href="#">Voyage</a>
                </li>

                <li className={"col-2"}>
                    <a href="#">Services</a>
                </li>

                <li className={"col-2"}>
                    <a href="#">Informations</a>
                </li>

                <li className={"col-1"}>
                    <a href="#">Aide</a>
                </li>

                <li className={"col-2"}>
                    <a href="#">Langue</a>
                </li>
            </ul>
        </nav>
    </header>
)
}