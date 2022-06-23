export default function Card(props){
    const {size,title,header,body,footer}=props;
    return(
        <div className={"text-center card col-"+size}>
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