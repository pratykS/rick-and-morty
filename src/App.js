import React from "react";
import {CharacterList} from "./components/character-list/character-list";
import {getAllData} from "./utils/fetchAll";
import './styles.css';

export default class App extends React.Component{

	constructor(){
		super();
		this.state = {
			loading:true,
			characters:[],
			episodes:[]
		}
	}

	componentDidMount() {

		//fetches all the characters and stores it to the component state
		new Promise((resolve,reject)=>{
			getAllData('https://rickandmortyapi.com/api/character', [], resolve, reject)
		})
		.then(response=>{
			this.setState({characters:response,loading:false});
		})
		.catch(error=>{
			console.log('HTTPS ERROR',error);
		})

		//fetches all episodes and stores it to the component state
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
		const {loading,characters,episodes} = this.state;

		//loader 
		if(loading){
			return (
				<div className="divLoader">
				<svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
				  <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
				</svg>
			  </div>
			);
		}

		//App-Container
		return (
			<div className="container">
			  <h1>Rick & Morty Characters</h1>
			  <CharacterList characterData={characters} episodeData={episodes}/>
			</div>
		);
	}
}