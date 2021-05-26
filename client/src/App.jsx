import React from 'react';
import Search from './Search';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        blueberry
        <Search />
        <LineGraph />
        <BarGraph />
      </div>
    );
  }
}

export default App;
