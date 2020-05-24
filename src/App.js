import React, { useState } from 'react'
import axios from 'axios'
import API_URL from './services/API'
import Search from './components/Searcher'
import Results from './components/Results'
import Popup from './components/PopUp'

function App() {
  const [state, setState] = useState({
    handle: "",
    results: [],
    selected: {}
  });

  const search = (event) => {
    if (event.key === "Enter") {
      axios(API_URL + "&s=" + state.handle).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let handle = e.target.value;

    setState(prevState => {
      return { ...prevState, handle: handle }
    });
  }

  const openPopup = id => {
    axios(API_URL + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App