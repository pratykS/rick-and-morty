import React from "react";
import {CharacterList} from "./components/character-list/character-list";
import {getAllData} from "./utils/fetchAll";
import './styles.css';

export default class App extends React.Component{

	constructor(){
		super();
		this.state = {
			data:[]
		}
	}

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
			response.map(function(res){
				obj[res.url] = res.name
				return localStorage.setItem('episodes',JSON.stringify(obj))
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
