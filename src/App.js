import React from "react";
import {CharacterList} from "./components/character-list/character-list";
import {getAllData} from "./utils/fetchAll";
import './styles.css';

export default class App extends React.Component{

	constructor(){
		super();
		this.state = {
			characters:[],
			episodes:[]
		}
	}

	componentDidMount() {

		new Promise((resolve,reject)=>{
			getAllData('https://rickandmortyapi.com/api/character', [], resolve, reject)
		})
		.then(response=>{
			this.setState({characters:response});
		})
		.catch(error=>{
			console.log('HTTPS ERROR',error);
		})

		new Promise((resolve,reject)=>{
			getAllData('https://rickandmortyapi.com/api/episode', [], resolve, reject)
		})
		.then(response=>{

			let obj = {};
			setTimeout(function(){
				for(let i=0;i<response.length;i++){
					obj[response[i].url] = response[i].name
				};
			},0);

			this.setState({episodes:obj});
		})
		.catch(error=>{
			console.log('HTTPS ERROR',error);
		})
	}


	render(){
		const {characters,episodes} = this.state;
		return (
			<div className="container">
			  <h1>Rick & Morty Characters</h1>
			  <CharacterList characterData={characters} episodeData={episodes}/>
			</div>
		  );
	}
}

// export default App;
