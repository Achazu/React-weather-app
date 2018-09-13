import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './Titles/titles.jsx';
import Form from './Form/form.jsx';
import Weather from './Weather/weather.jsx';

const api_key = 'eca81c98efc341359406ea5fdbbdea24';

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: undefined
		}
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}
		`);
		const data = await api_call.json();
		if(country && city){
			this.setState({
			temperature: data.main.temp,
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: ''
			})
		} else {
			this.setState({
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: 'Please enter city and state'
			})
		}
		
	}
	render(){
		return (
			<div>
				<div className='wrapper'>
					<div className='main'>
						<div className='container'>
							<div className='row'>
								<div className="col-xs-5 title-container">
									<Titles/>
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather}/>
									<Weather weatherData={this.state}/>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}