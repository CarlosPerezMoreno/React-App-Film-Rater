import React from 'react'

function ImgResult( { results } ) {
    return (
        <div className='results'>
            <img src={results.Poster} alt='Film Poster' />
            <h3>{results.Title}</h3>
        </div>
    )
}

export default ImgResult
