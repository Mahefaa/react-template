import Card from "../Card/Card";

export default function Client(){
    return (
        <div className={"container-fluid mt-5"}>
            <div className={"jumbotron d-flex mt-1"}>
                <Card size={3}
                      header={"today"}
                      body={"today's trip list"}
                      footer={"Footer"}/>

                <Card size={6}
                      header={"tomorrow"}
                      body={"tomorrow's trip list"}
                      footer={"Footer"}/>

                <Card size={3}
                      header={"Most visited sites"}
                      body={"HEI"}
                      footer={"Footer"}/>
            </div>
            {/*just make sure that size sum <=12*/}
            <div className={"jumbotron d-flex"}>
                <Card size={4}
                      header={""}
                      body={""}
                      footer={""}
                />

                <Card size={4}
                      header={""}
                      body={""}
                      footer={""}
                />

                <Card size={4}
                      header={""}
                      body={""}
                      footer={""}
                />
            </div>
        </div>
    );
}