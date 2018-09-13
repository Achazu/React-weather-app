import React from 'react';
import ReactDOM from 'react-dom';

const Form = props => (
	<form onSubmit={props.getWeather}>
		
		<div className='col-xs-6'>
			<label className='label' htmlFor='city'>City</label>
		</div>
		<div className='col-xs-6'>		
			<input type='text' name='city' placeholder='City...'/>
		</div>		
		
		<div className='col-xs-6'>
			<label className='label' htmlFor='country'>Country (ISO code, eg. UK)</label>
		</div>		
		<div className='col-xs-6'>		
			<input type='text' name='country' placeholder='Country...'/>			
		</div>		

		<button>Get weather</button>

	</form>
)

export default Form