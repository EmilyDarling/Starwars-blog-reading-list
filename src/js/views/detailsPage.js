import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation} from "react-router-dom";
import "../../styles/demo.css";



export const Details = (props) => {
    let {nameId} = useParams();
	let category = props.category;
    const [characterDetails, setCharacterDetails] = useState([]);
    const [planetDetails, setPlanetDetails] = useState([]);
    const [vehicleDetails, setVehicleDetails] = useState([]);

	var singleSetofDetails = [];
    
    const getCharacterDetails = () => {
		fetch("https://swapi.dev/api/people")
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
            
		})

		.then(responseAsJson => {
			console.log(responseAsJson);
			setCharacterDetails(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };

	  const getPlanetDetails = () => {
		fetch("https://swapi.dev/api/planets")
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
            
		})

		.then(responseAsJson => {
			console.log(responseAsJson);
			setPlanetDetails(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };

	  const getVehicleDetails = () => {
		fetch("https://swapi.dev/api/vehicles")
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
            
		})

		.then(responseAsJson => {
			console.log(responseAsJson);
			setVehicleDetails(responseAsJson.results);	
						
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };

	  const fillSingleCharDetails=(x)=>{
		for (const [key, value] of Object.entries(x)) {
			if(value == nameId){
				singleSetofDetails.push(category) ;
				singleSetofDetails.push(x.birth_year) ;
				singleSetofDetails.push(x.gender) ;
				singleSetofDetails.push(x.height) ;
				singleSetofDetails.push(x.skin_color) ;
				singleSetofDetails.push(x.eye_color) ;
			}
		  }
	  }

	  const fillSinglePlanetDetails=(x)=>{
		for (const [key, value] of Object.entries(x)) {
			if(value == nameId){
				singleSetofDetails.push(x.name) ;
				singleSetofDetails.push(x.birth_year) ;
				singleSetofDetails.push(x.gender) ;
				singleSetofDetails.push(x.height) ;
				singleSetofDetails.push(x.skin_color) ;
				singleSetofDetails.push(x.eye_color) ;
			}
		  }
	  }

	  const fillSingleVehicleDetails=(x)=>{
		for (const [key, value] of Object.entries(x)) {
			if(value == nameId){
				singleSetofDetails.push(x.name) ;
				singleSetofDetails.push(x.birth_year) ;
				singleSetofDetails.push(x.gender) ;
				singleSetofDetails.push(x.height) ;
				singleSetofDetails.push(x.skin_color) ;
				singleSetofDetails.push(x.eye_color) ;
			}
		  }
	  }
      let location = useLocation();
	 
      useEffect(() => {
        getCharacterDetails();
		getPlanetDetails();
		getVehicleDetails();
        
      }, [location]);

     
    return(
        <div className="d-flex justify-content-center" style={{maxWidth:"70%", marginLeft:"15%"}}>
            {category == "characters" ? characterDetails.map(fillSingleCharDetails)  
				: category == "characters" ? characterDetails.map(fillSingleCharDetails)  
				: characterDetails.map(fillSingleCharDetails)}
            
			
			<div className="mx-5 container-fluid text-center" >
				<div className=" d-flex justify-content-between">
					<img id="indivImage" src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest/scale-to-width-down/1000?cb=20190313021755" />
					<div id="indivInfo ">
						{<h2 className="text-center" style={{fontSize:"5rem"}}>{singleSetofDetails[0]}</h2> }
						<p className="text-center mx-5 fs-3">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

					</div>
				</div>	
				<div className=" mt-4 text-danger text-center row row-col-6" style={{maxWidth:"70%", marginLeft:"15%"}}>
					<div className="col">
						<p className="fs-3">Name</p>
						<p>{singleSetofDetails[0]}</p>
					</div>
					<div className="col">
						<p className="fs-3">Birth Year</p>
						<p>{singleSetofDetails[1]}</p>
					</div>
					<div className="col">
						<p className="fs-3">Gender</p>
						<p>{singleSetofDetails[2]}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Height</p>
						<p>{singleSetofDetails[3]}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Skin Color</p>
						<p>{singleSetofDetails[4]}</p>
					</div>
					<div className="col">
						<p className="fs-3 ">Eye Color</p>
						<p>{singleSetofDetails[5]}</p>
					</div>
					
				</div>
			</div>

            
            
        </div>
    );
}