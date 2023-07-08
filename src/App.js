import { CardContainer } from "./components/CardContainer";
import { Header } from "./components/Header";
import {data} from "./helper/data"


function App() {



  return (
    <div className="App">

      
      {/* {data.map((item,i) =>(

      ))} */}

      <Header/>
      <CardContainer/>


    </div>
  );
}

export default App;
