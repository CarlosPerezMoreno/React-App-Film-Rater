import React from 'react'

import InfoResult from '../InfoResults'

function Results ({ finalresult, openPopup  }) {
	return (
		<section className="final-result">
			{finalresult.map(res => (
				<InfoResult key={res.imdbID} inforesult={res} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results
