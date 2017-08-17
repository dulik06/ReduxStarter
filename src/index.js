import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY ='AIzaSyBqVassz9mv2yhVvHIKyXWg8Q2UVNXJvf0	'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
 );
}

ReactDOM.render(<App />, document.querySelector('.container'));
