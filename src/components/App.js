import React from 'react';
import bolaget from '../api/bolaget';
import SearchBar from './SearchBar';

const search = params => bolaget.get("/products",  { params } );

class App extends React.Component {
  state = {
    results: {}
  };

  onSearchSubmit = async term => {
    const response = await search("/products", {search: term});
    this.setState({results: response.data})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )}
}

export default App;