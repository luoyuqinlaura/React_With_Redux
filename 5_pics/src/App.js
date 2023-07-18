import React from 'react';
import SearchBar from './Components/SearchBar';
function App() {
  const handleSubmit = (term) => {
    console.log('Do a search at', term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
