import {Component} from "react";
import Counter from "./components/BasicCounter";


class App2 extends Component {

   render () {
     return(<>
        <Counter/>
        <Counter/>
        </>
     )
   };
}

export default App2;