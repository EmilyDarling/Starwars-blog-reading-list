const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterBank: [],
			planetBank:[],
			vehicleBank:[],
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {


			getCharacterBank: () => {
				const store = getStore();
				fetch('https://swapi.dev/api/people')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					setStore({...store, characterBank: [responseAsJson.results],})
					
					console.log(store.characterBank);	
								
				})
		
				.catch(error => {
					console.log('Looks like there was a problem: \n', error);
				});
			  },
		
			  getPlanetBank: () => {
				fetch('https://swapi.dev/api/planets')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					
					store.planetBank(responseAsJson.results);	
								
				})
		
				.catch(error => {
					console.log('Looks like there was a problem: \n', error);
				});
			  },
		
			  getVehicleBank: () => {
				const store = getStore();
				fetch('https://swapi.dev/api/vehicles')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					
					store.vehicleBank(responseAsJson.results);	
								
				})
		
				.catch(error => {
					console.log('Looks like there was a problem: \n', error);
				});
			  },
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

				//reset the global store
			//	setStore({ demo: demo });
			
		}
	};
};

export default getState;
