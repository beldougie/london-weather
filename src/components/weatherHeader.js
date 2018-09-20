import React from 'react';

export default ({ main, description }) => {
	return <h5 className="card-title">{`Summary: ${main} - ${description}`}</h5>
}
