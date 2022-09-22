import {Component} from "react";

class Index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: this.props.initial || 0,

      };
      this.handleAdd = this.handleAdd.bind(this)
      this.handleSub = this.handleSub.bind(this)
   }

   handleAdd() {
      this.setState({
         count: this.state.count + 1,
      });
   }

   handleSub() {
      this.setState({
         count: this.state.count - 1,
      });
   }

   render() {
      const { count } = this.state;
      return (
         <div >
            <button onClick={this.handleAdd}>+</button>
            <h1> {title} Count {count}</h1>
            <button onClick={this.handleSub}>-</button>

         </div>
      )
   }
}


export default Index