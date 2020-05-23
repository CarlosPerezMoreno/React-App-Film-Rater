import React from 'react'

function Searcher ( {handleInp, search} ) {
    return (
        <section className='searchBox-wrap'>
            <input 
                type='text' 
                placeholder='Search for a film...' 
                className='search-box'
                onChange={handleInp} 
                onKeyPress={search}
            />

        </section>
    )
}

export default Searcher
