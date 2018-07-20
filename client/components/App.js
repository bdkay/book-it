import React from 'react';
import BookList from './BookList';

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
      <BookList />
    );
  }
}

export default App;
