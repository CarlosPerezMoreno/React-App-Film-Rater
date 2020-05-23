import React from 'react'
import ImgResults from '../ImgResults'

function Results ( { results } ) {
    return (
        <section className="results">
            {results.map(res => (
                <ImgResults result={res} />
            ))}
        </section>
    )
}

export default Results
