import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/app.css';


document.addEventListener('DOMContentLoaded', 
	function(){
		ReactDOM.render(
			<Main/>,
			document.getElementById('app')
		);
	});