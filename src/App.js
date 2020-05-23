import React, { useState } from 'react'
import axios from 'axios'
import API_URL from './services/API'
import Search from './components/Searcher'
import Results from './components/Results'


function App() {
  const [state, setState] = useState({
    handle: "",
    finalresult: [],
    selected: {}
  });

  const search = ( event ) => {
    if (event.key === "Enter") {
      axios(API_URL + '&s=' + state.handle)
        .then(({ data }) => {
        
          let result = data.Search;

          setState(prev => {
            return { ...prev, finalresult: result }
        })
      });
    }
  }
  
  const handleInput = ( event ) => {
    let handle = event.target.value;

    setState(prev => {
      return { ...prev, handle: handle }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Film Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results finalresult={state.finalresult} />
      </main>
    </div>
  );
}

export default App
