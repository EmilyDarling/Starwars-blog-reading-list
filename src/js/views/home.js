import React, { useState , useEffect, useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { useNavigate} from "react-router-dom";
import { Context } from '../store/appContext.js';




export const Home = () => {
	const navigate = useNavigate();
	const { actions,store } = useContext(Context);


	  useEffect(() => {
		
		actions.getCharacterBank();
		actions.getPlanetBank();
		actions.getVehicleBank();
	
			
	}, []);

	return(
	<div className="text-center mt-5">
		<h1 className="text-danger mt-5  ms-3 text-start">Characters</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{store.characterBank.map((characterStats,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1000?cb=20190313021755" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body" key={index}>
						   <h5 className="card-title">{characterStats.name}</h5>
						   <p className="card-text">Gender: {characterStats.gender}</p>
						   <p className="card-text">Hair Color: {characterStats.hair_color}</p>
						   <p className="card-text">Eye Color: {characterStats.eye_color}</p>
						   <button className="btn btn-primary me-2" onClick={() => navigate(`/characterDetailsPage/${characterStats.name}/`)} >Learn More!</button>
						   {store.favoriteList.includes(characterStats.name) ? 
						   <a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(characterStats.name)}> <i className="fa fa-heart text-danger" /> </a>
							:<a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(characterStats.name)}> <i className="fa fa-heart text-secondary" /> </a> }
					   </div>
				   </div>
				   
				)
					
				}
				 
		</div>


		<h1 className="text-danger mt-5 ms-3 text-start">Planets</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{store.planetBank.map((planet,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://cdn.sci.news/images/2018/08/image_6322-Water-World-Exoplanet.jpg" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body">
						   <h5 className="card-title">{planet.name}</h5>
						   <p className="card-text">Population: {planet.population}</p>
						   <p className="card-text">Climate: {planet.climate}</p>
						   
						   <a href="#" className="btn btn-primary me-2" onClick={() => navigate(`/planetDetailsPage/${planet.name}/`)}>Learn More!</a>
						   {store.favoriteList.includes(planet.name) ? 
						   <a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(planet.name)}> <i className="fa fa-heart text-danger" /> </a>
							:<a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(planet.name)}> <i className="fa fa-heart text-secondary" /> </a> }
					   </div>
				   </div>
				   )
					
				}
				 
		</div>

		<h1 className="text-danger mt-5  ms-3 text-start">Vehicles</h1>
		<div id="characterCards" className="card-group card-group-scroll">
			
		{store.vehicleBank.map((vehicle,index) =>
					 
					<div className="card mx-3 mb-5" style={{minWidth:300}}>
					<img src="https://i.pinimg.com/236x/ee/91/33/ee9133fc084197d8e5c8c1f0dba0dbba.jpg" className=" card-img-top" width="100%" height="180" role="img" />
					   <div className="card-body" key={index}>
						   <h5 className="card-title">{vehicle.name}</h5>
						   <p className="card-text">Model: {vehicle.model}</p>
						   <p className="card-text">Passengers: {vehicle.passengers}</p>
						   <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
						   <a href="#" className="btn btn-primary me-2" onClick={() => navigate(`/vehicleDetailsPage/${vehicle.name}`)}>Learn More!</a>
						   {store.favoriteList.includes(vehicle.name) ? 
						   <a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(vehicle.name)}> <i className="fa fa-heart text-danger" /> </a>
							:<a href="#" className="btn  ms-2" onClick={() => actions.addFavorite(vehicle.name)}> <i className="fa fa-heart text-secondary" /> </a> }
					   </div>
				   </div>
				   )
					
				}
				 
		</div>
		
	</div>
);
}
