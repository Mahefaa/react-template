import Card from "../Card/Card";

export default function Server(){
    return(
        <div className={"container-fluid mt-5"}>
            <div className={"jumbotron d-flex mt-1"}>
                <Card size={3}
                      header={"To Do List"}
                      body={"Broken Cars"}
                      footer={"Footer"}
                />

                <Card size={6}
                      header={"Free position"}
                      body={"List"}
                      footer={""}
                />

                <Card size={3}
                      header={"Most visited sites"}
                      body={"HEI"}
                      footer={"Footer"}
                />
            </div>

            <div className={"jumbotron d-flex mt-1"}>
                <Card size={3}
                      header={"today"}
                      body={"today's trip list"}
                      footer={"Footer"}
                />

                <Card size={6}
                      header={"tomorrow"}
                      body={"tomorrow's trip list"}
                      footer={"Footer"}
                />

                <Card size={3}
                      header={"Most visited sites"}
                      body={"HEI"}
                      footer={"Footer"}
                />
            </div>
            {/*just make sure that size sum <=12*/}
            <div className={"jumbotron d-flex"}>
                <Card size={4}
                      header={"Employees"}
                      body={"Sorted List"}
                      footer={""}
                />

                <Card size={4}
                      header={"Cars"}
                      body={""}
                      footer={""}
                />

                <Card size={4}
                      header={"Trips"}
                      body={""}
                      footer={""}
                />
            </div>

            <div className={"jumbotron d-flex"}>
                <Card size={4}
                      header={"Daily income"}
                      body={"Sorted List"}
                      footer={""}
                />

                <Card size={4}
                      header={"Daily Outcome"}
                      body={""}
                      footer={""}
                />

                <Card size={4}
                      header={"Sum"}
                      body={"++"}
                      footer={"Good Job / OH NO"}
                />
            </div>
        </div>
    );
}