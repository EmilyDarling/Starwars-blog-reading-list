import React, { useState , useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { useNavigate} from "react-router-dom";
import { Context } from '../store/appContext.js';




export const Home = () => {
	const navigate = useNavigate();
	const { actions,store } = useContext(Context);

	const [characterBank, setCharacterBank] = useState([]);
	const [planetBank, setPlanetBank] = useState([]);
	const [vehicleBank, setVehicleBank] = useState([]);
	
	
	const getCharacterBank = () => {
		fetch('https://swapi.dev/api/people')
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(responseAsJson => {
			
			setCharacterBank(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };

	  const getPlanetBank = () => {
		fetch('https://swapi.dev/api/planets')
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(responseAsJson => {
			
			setPlanetBank(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };

	  const getVehicleBank = () => {
		fetch('https://swapi.dev/api/vehicles')
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(responseAsJson => {
			
			setVehicleBank(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };



	  useEffect(() => {
		getCharacterBank();
		getPlanetBank();
		getVehicleBank();	
	}, []);

	return(
	<div className="text-center mt-5">
		<h1 className="text-danger mt-5  ms-3 text-start">Characters</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{characterBank.map((characterStats,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1000?cb=20190313021755" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body">
						   <h5 className="card-title">{characterStats.name}</h5>
						   <p className="card-text">Gender: {characterStats.gender}</p>
						   <p className="card-text">Hair Color: {characterStats.hair_color}</p>
						   <p className="card-text">Eye Color: {characterStats.eye_color}</p>
						   <button className="btn btn-primary me-2" onClick={() => navigate(`/detailsPage/characters/${characterStats.name}/`)} >Learn More!</button>
						   <button className="btn btn-primary ms-2"> ❤ </button>
					   </div>
				   </div>
				   
				)
					
				}
				 
		</div>


		<h1 className="text-danger mt-5 ms-3 text-start">Planets</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{planetBank.map((planet,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://cdn.sci.news/images/2018/08/image_6322-Water-World-Exoplanet.jpg" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body">
						   <h5 className="card-title">{planet.name}</h5>
						   <p className="card-text">Population: {planet.population}</p>
						   <p className="card-text">Climate: {planet.climate}</p>
						   
						   <a href="#" className="btn btn-primary me-2" onClick={() => navigate("/detailsPage/characters")}>Learn More!</a>
						   <a href="#" className="btn btn-primary ms-2"> ❤ </a>
					   </div>
				   </div>
				   )
					
				}
				 
		</div>

		<h1 className="text-danger mt-5  ms-3 text-start">Vehicles</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{vehicleBank.map((vehicle,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://i.pinimg.com/236x/ee/91/33/ee9133fc084197d8e5c8c1f0dba0dbba.jpg" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body">
						   <h5 className="card-title">{vehicle.name}</h5>
						   <p className="card-text">Model: {vehicle.model}</p>
						   <p className="card-text">Passengers: {vehicle.passengers}</p>
						   <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
						   <a href="#" className="btn btn-primary me-2" onClick={() => navigate("/detailsPage")}>Learn More!</a>
						   <a href="#" className="btn btn-primary ms-2"> ❤ </a>
					   </div>
				   </div>
				   )
					
				}
				 
		</div>
		
	</div>
);
}
