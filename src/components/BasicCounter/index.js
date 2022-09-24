import {Component} from "react";

class BasicCounter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: this.props.initial || 0,
      };
      this.handleAdd = this.handleAdd.bind(this)
      this.handleSub = this.handleSub.bind(this)
   }

   static getDerivedStateFromProps(props, state){
      if(props.reset){
         return {
            count:0,
         }
      }
      return null
   }

   componentDidMount() {
   }

   componentDidUpdate() {
      if(this.props.reset){
         // this.setState({
         //    count: 0,
         // });
      }
   }

   componentWillUnmount() {
      console.log("components unmounted")
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
      const {title} = this.props;
      const {isHidden} = this.props;
      return (
         <div className={isHidden ? "hid": ""}>
            <button onClick={this.handleAdd}>+</button>
            <h1> {title} Count {count}</h1>
            <button onClick={this.handleSub}>-</button>

         </div>
      )
   }
}

export default BasicCounter