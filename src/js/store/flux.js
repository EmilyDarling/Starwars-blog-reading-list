const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterBank: [],
			planetBank:[],
			vehicleBank:[],
			favoriteList:[],
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
			addFavorite: (character) => {
				const store = getStore()
				const favoriteCharacterInList = store.favoriteList.includes(character.result.properties.name)
				if (!favoriteCharacterInList) {
					setStore({favoriteList: [...store.favoriteList, character.result.properties.name]})
				}
			},
			 removeFavorite: (index) => {
				var newFavList = [];
				favoriteCharacters.forEach(e => {
					if(e !== favoriteCharacters[index])
					{newFavList =([...newFavList, e]);
						console.log(newFavList);
					}
				});
				 
				setFavoriteCharacters (newFavList);
			},
			// export to home later
			  addFavorite: (item)=> {
				let newFavorite = item.name;
				setFavoriteCharacters([...favoriteCharacters, [newFavorite]]);
				
			  },


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
					setStore({characterBank: responseAsJson.results})
					
					console.log("flux "+store.characterBank);	
								
				})
		
				.catch(error => {
					console.log('Looks like there was a problem: \n', error);
				});
			  },
		
			  getPlanetBank: () => {
				const store = getStore();
				fetch('https://swapi.dev/api/planets')
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
		
				.then(responseAsJson => {
					
					setStore({planetBank: responseAsJson.results})
								
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
					
					setStore({vehicleBank: responseAsJson.results})	
								
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
