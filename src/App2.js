import {Component} from "react";
import Counter from "./components/BasicCounter";


class App2 extends Component {

   constructor() {
      super();
      this.state = {
         reset: false,
         hideCounter1: false,
         hideCounter2: false,
      }
   }

   resetCounters = () => {
      this.setState({reset: true});
   }


   hideCounter = ( ) => {
      this.setState({hideCounter1: !this.state.hideCounter1})

   }


   render() {
      const {state: {hideCounter1, hideCounter2}} = this;
      const {reset} = this.state
      return (
         <>
            <button onClick={this.resetCounters}>Reset Count</button>
            {!hideCounter1 && <Counter reset={reset}/>}

            <button onClick={this.hideCounter}>
               {!hideCounter1 ? `Hide` : "show"}
            </button>

            <Counter isHidden={hideCounter2} reset={reset}/>
            <button onClick={this.hideCounter2}>Hid 2</button>

            {/*<Counter reset ={reset}/>*/}
            {/*<button>Hid 3</button>*/}

         </>
      )
   };
}

export default App2;