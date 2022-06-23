import './App.css';
import './bootstrap-4.6.1-dist/css/bootstrap.css'
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Card from "./Card";
function App() {
  return (
      <>
      <Header/>
          <div className={"container-fluid"}>
              <div className={"jumbotron d-flex mt-4"}>
                  <Card size={3} header={"today"} body={"today's trip list"} footer={"Footer"}/>

                  <Card size={6} header={"tomorrow"} body={"tomorrow's trip list"} footer={"Footer"}/>

                  <Card size={3} header={"Most visited sites"} body={"HEI"} footer={"Footer"}/>
              </div>

              <div className={"jumbotron d-flex"}>
                  <Card size={4} header={""} body={""} footer={""}/>

                  <Card size={4} header={""} body={""} footer={""}/>

                  <Card size={4} header={""} body={""} footer={""}/>
              </div>
          </div>
      <Footer/>
      </>
  );
}

export default App;
