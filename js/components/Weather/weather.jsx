import React from 'react';
import ReactDOM from 'react-dom';

const Weather = props => {
	let weatherData;
	for(let i in props){
		weatherData = props[i]
	}
	return (
		<div className='col-xs-12 weather__info'>		
			{
				weatherData.city && weatherData.country && <p className='weather__key'>Location: 
				<span className='weather__value'> {weatherData.city}, {weatherData.country}</span>
				</p>
			}
			{
				weatherData.temperature && <p className='weather__key'>Temperature: 
				<span  className='weather__value'> {weatherData.temperature}</span>
				</p>
			}
			{
				weatherData.humidity && <p className='weather__key'>Humidity: 
				<span  className='weather__value'> {weatherData.humidity}</span>
				</p>
			}
			{
				weatherData.description && <p className='weather__key'>Conditions: 
				<span  className='weather__value'> {weatherData.description}</span>
				</p>
			}
			{
				weatherData.error && 
				<p className='weather__error'>{weatherData.error}</p>
			}
		</div>
	)
}

export default Weather