import React from "react";
import {CharacterList} from "./components/character-list/character-list";
import {getPlanets, getAllData} from "./utils/fetchAll";

// function App() {
//   let [data, setData] = useState([]);
//   let url = "https://rickandmortyapi.com/api/character/";
//   useEffect(() => {
//     axios
//       .get(url)
//       .then(res => {
//         setData(res.data.results);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Rick & Morty Characters</h1>
//       <CharacterList characterData={data} />
//     </div>
//   );
// }


export default class App extends React.Component{

	constructor(){
		super();
		this.state = {
			data:[]
		}
	}
	
	// async componentDidMount(){
	// 	const urlChar = "https://rickandmortyapi.com/api/character";

	// 	let responseCharacter = await fetch(urlChar);
	// 	if(responseCharacter.ok){
	// 		let characterData = await responseCharacter.json();
	// 		this.setState({data:characterData.results})
	// 	}else{
	// 		console.log('HTTPS ERROR')
	// 	}		

	// }


	componentDidMount() {

		new Promise((resolve,reject)=>{
			getAllData('https://rickandmortyapi.com/api/character', [], resolve, reject)
		})
		.then(response=>{
			this.setState({data:response});
		})
		.catch(error=>{
			console.log('HTTPS ERROR',error);
		})

		new Promise((resolve,reject)=>{
			getAllData('https://rickandmortyapi.com/api/episode', [], resolve, reject)
		})
		.then(response=>{
			let obj = {};
			console.log(response);
			response.map(function(res){
				obj[res.url] = res.name
				localStorage.setItem('episodes',JSON.stringify(obj))
			})
		})
		.catch(error=>{
			console.log('HTTPS ERROR',error);
		})
	}


	render(){
		const {data} = this.state;
		return (
			<div className="container">
			  <h1>Rick & Morty Characters</h1>
			  <CharacterList characterData={data}/>
			</div>
		  );
	}
}

// export default App;
