import React, { useState , useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const [character, setCharacter] = useState("");
	const [characterBank, setCharacterBank] = useState([]);

	const getCharacterBank = () => {
		fetch('https://www.swapi.tech/api/people')
		.then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})

		.then(responseAsJson => {
			console.log(responseAsJson);
			setCharacterBank(responseAsJson.results);			
		})

		.catch(error => {
			console.log('Looks like there was a problem: \n', error);
		});
	  };


	  useEffect(() => {
		getCharacterBank();	
	}, []);

	return(
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div id="characterCards">
			
		{characterBank.map((characterStats,index) =>
					<div className="card" style={{width:300}}>
					<svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" 
				   aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#868e96"></rect></svg>
					   <div className="card-body">
						   <h5 className="card-title">{characterStats.name}</h5>
						   <p className="card-text">Gender: {characterStats.url}</p>
						   <p className="card-text">Hair Color: {characterStats.hair_color}</p>
						   <p className="card-text">Eye Color: {characterStats.eye_color}</p>
						   <a href="#" className="btn btn-primary me-2">Learn More!</a>
						   <a href="#" className="btn btn-primary ms-2"> heart </a>
					   </div>
				   </div>
				   )}
					)
				}
				 
		</div>
		
	</div>
);
}
