// const Hello = props => {
//   return (
//     <h1>{props.saludo}</h1>
//   )
// }

// ReactDOM.render(<Hello saludo="hola mundo"/>, document.getElementById('box'));


// al hacer click cambia el h1
// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nombre: "Alvaro"
//     }
//   }

//   despedirse = () => {
//     this.setState({
//       nombre: 'Alexys'
//     })
//   };

//   render() {
//     return (
//       <h1 onClick={this.despedirse}>Hola {this.state.nombre}</h1>
//     )
//   }
// }

// ReactDOM.render(<Hello />, document.getElementById('box'));

class Counter extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     count: 0
   }
 }

 upCount = (e) => {
  e.preventDefault();
  this.setState (function(prevState) {
    return {
      count: prevState.count + 1
    }
  })
 }

 downCount = (e) => {
  e.preventDefault();
  this.setState (function(prevState) {
    if(prevState.count >= 1) {
      return {
        count: prevState.count - 1
      }
    }
  })
 }

 resetCount = (e) => {
  e.preventDefault();
  this.setState ({count: 0})
 };

 render() {
   return (
     <div className="counter">
      <div className="count">{this.state.count}</div>
      <div className="changeCount">
        <a href="#" onClick={this.upCount}>Up</a>
        <a href="#" onClick={this.downCount}>Downp</a>
        <a href="#" onClick={this.resetCount}>Reset</a>
      </div>
     </div>
   )
 }
}

ReactDOM.render(<Counter />, document.getElementById('box')); 