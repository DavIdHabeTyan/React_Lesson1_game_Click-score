import {Component} from "react";

class Timer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         time: 10,
      }
   }

   handelStart = () => {
     let intervalId =  setInterval(
        () =>{
           if(this.state.time === 0 ) {
             clearInterval(intervalId)
               this.props.setFinish()
           } else {
              this.setState({
                 time: this.state.time - 1
              })
           }
         }, 1000);
   }

   render() {
      const {state: {time}} = this;
      return (
         <div>
            <button onClick={this.handelStart}>Start</button>
            <h1>Time:{time}</h1>
         </div>
      )
   }
}

export default Timer;