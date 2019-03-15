import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className='field'>
          <label>Drink Search</label>
          <input
            type='text'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder='Enter a product name.'
          />
        </div>
      </form>
    );
  }
}
export default SearchBar;
