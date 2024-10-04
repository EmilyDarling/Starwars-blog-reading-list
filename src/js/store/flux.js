const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterBank: [],
			planetBank:[],
			vehicleBank:[],
			favoriteList:[],
			favoriteListCategory:[],
			
		},
		actions: {
			
			 removeFavorite: (character) => {
				const store = getStore(); //make local copy of the store obj for use in this function only
				var newFavList = [];
				store.favoriteList.forEach(e => {
					if(e !== character)
					{newFavList =([...newFavList, e]);
						
					}
				});
				 
				setStore({favoriteList: newFavList}); //must set the store variables byt setStore bc in react you dont want to directly change the state
			},
			addFavorite: (cat, item) => {
				const store = getStore();
				 const favoriteItemInList = store.favoriteList.includes(item);
				 if (!favoriteItemInList) {
				 	setStore({favoriteList: [...store.favoriteList, item]});
					setStore({favoriteListCategory: [...store.favoriteListCategory, cat]});
					
				}else {
					var newFavList = [];
					store.favoriteList.forEach(e => {
					if(e !== character)
					{newFavList =([...newFavList, e]);
						
					}
					});
				 
				setStore({favoriteList: newFavList});
				
				}
				
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
			
			
		}
	};
};

export default getState;
