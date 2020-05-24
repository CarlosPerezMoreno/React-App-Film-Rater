import React from 'react'

function infoResult({ inforesult, openPopup }) {
	return (
		<div className="info-results">
			<img src={inforesult.Poster} alt='Film Posters' onClick={() => openPopup(inforesult.imdbID)} />
			<h3>{inforesult.Title}</h3>
		</div>
	)
}

export default infoResult
