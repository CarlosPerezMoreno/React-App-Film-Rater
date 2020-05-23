import React from 'react'

function infoResult({ inforesult }) {
	return (
		<div className="results">
			<img src={inforesult.Poster} alt='Film Posters' />
			<h3>{inforesult.Title}</h3>
		</div>
	)
}

export default infoResult
