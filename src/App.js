import React, { useState } from 'react';
import Searcher from './components/Searcher'
import API_URL from './services/API'
import Results from './components/Results'
import axios from 'axios'

function App() {
  const [state, setState] = useState({
    handle: '',
    results: [],
    selected: []
  })

  const search = ( event ) => {
    if (event.key === 'Enter') {
      axios(`${API_URL} &s= ${state.handle}`)
        .then(( {data} ) => {
            let results = data.Search
          
            setState(prev => {
              return ({...prev, results: results })
            })
        })
    }
  }

  const handleInput = ( event ) => {
    let handle = event.target.value

    setState(prev => {
      return {...prev, handle: handle}
    })
  }
  return (
    
    <div className="App">
      <header>
        <h1> Film Database</h1>
      </header>
      <main>
        <Searcher handleInp={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
