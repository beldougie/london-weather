import React from 'react';

export const getDayNight = (sunrise, sunset) => {
	if(!sunset || !sunrise) return '';
	const now = Date.now() / 1000;
	return now >= sunrise && now < sunset 
		? '-day'
		: '-night';
}

export const buildClassName = (id, sunset, sunrise) => {
	return `wi wi-owm${getDayNight(sunrise, sunset)}-${id}`;
};

export default ({ id, sunset, sunrise, classOverrides = '' }) => {
	return <i className={`${classOverrides} ${buildClassName(id, sunset, sunrise)}`}></i>
}
