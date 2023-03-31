const urlBase = "https://swapi.dev/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:JSON.parse(localStorage.getItem("characters")) ||[],
			characters2:[],
			planets: JSON.parse(localStorage.getItem("planets"))||[],
			planets2:[],
			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},


			getCharacters2: async () => {
				const store = getStore()
				try {
					for(let index = 1; index <= 10; index++){
					const response = await fetch(`https://www.swapi.tech/api/people/${index}`)
					if(!response.ok){
						console.error("Fallo")
						return false
					}
					const data = await response.json()
					store.characters2.push(data.result)
					setStore({characters2: store.characters2})

				}
				} catch (error) {
					console.log(error)
				}
				
			},


		 	 getCharacters: () => {
				fetch(`${urlBase}/people`)
				  .then((response) => response.json())
				  .then((data) =>  {
				  setStore({ characters: data.results });
					
					console.log(data.results, "😊")
				
				}) 
		   
				  .catch((error) => console.error("Error:", error));
			  },
 
			  getPlanets: () => {
				fetch(`${urlBase}/planets`)
				  .then((response) => response.json())
				  .then((data) =>  {
				  setStore({ planets: data.results });
					
					console.log(data.results,"=)")
				
				})
		   
				  .catch((error) => console.error("Error:", error));
			  },


			  getPlanets2: async () => {
				const store = getStore()
				try {
					for(let index = 1; index <= 10; index++){
					const response = await fetch(`https://www.swapi.tech/api/planets/${index}`)
					if(!response.ok){
						console.error("Error")
						return false
					}
					const data = await response.json()
					store.planets2.push(data.result)
					setStore({planets2: store.planets2})

				}
				} catch (error) {
					console.log(error)
				}
				
			},

		setFavorito: (name) => {
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, name] });
			  },
			  deleteFavorito: (name) => {
				const store = getStore();
				let newFav = store.favoritos.filter((index) => index !== name);
				setStore({ favoritos: newFav});
			  },




			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
