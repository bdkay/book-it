// Presentational

// const App = () => {
//   return (
//     <h2>Hello components</h2>
//   );
// };

// We need state, so we'll keep the class syntax

class App extends React.Component {
  state = { answer: 42 };
  render(){
    return (
      <h2>Hello {this.state.answer}</h2>
    )
  }
}

export default App;
