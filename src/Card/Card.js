export default function Card(props){
    const {size,header,body,footer}=props;
    return(
        <div className={"text-center card col-"+size+" ml-1"}>
            <div className={"card-header"}>
                {header}
            </div>
            <div className={"card-body"}>
                {body}
            </div>
            <div className={"card-footer"}>
                {footer}
            </div>
        </div>
    );
}