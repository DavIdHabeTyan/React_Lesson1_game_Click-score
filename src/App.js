import {Component} from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

class App extends Component {
   constructor() {
      super();
      this.state = {
         isFinished: false,

      };
   }

   setFinished = () => {
      this.setState({
         isFinished: true,
      })
   }

   render() {
      const {isFinished} = this.state;
      return (
         <div>
            <Timer setFinish={this.setFinished}/>
            <Counter isFinished={isFinished} title="First" initial={0}/>

         </div>
      )
   }
}

export default App