import React from 'react'

import InfoResult from '../InfoResults'

function Results ({ finalresult }) {
	return (
		<section className="result">
			{finalresult.map(res => (
				<InfoResult inforesult={res} />
			))}
		</section>
	)
}

export default Results
