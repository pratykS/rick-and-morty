import React from 'react';
import './character-card.css'

export class CharacterCard extends React.Component{

    constructor(props){
		super(props);
		this.state = {
			showEpisodesFeatured:false
		}

		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		if(this.state.showEpisodesFeatured){
			this.setState({showEpisodesFeatured:false})
		}else{
			this.setState({showEpisodesFeatured:true})
		}	
	}

    render(){

	const episodes = this.props.chapter;
	const {image,name,species,status,location,episode,origin,type,id} = this.props.character;
	const episodeFeatured = episode.map(function(eps){
		return episodes[eps];
	});

    return (
            <div className="character">
			<span className="charId">{id}</span>
              <div className="character-content">
              <img src={image} alt="character" />
                <h3>Name: {name}</h3>
				<h3>Origin: {origin.name}</h3>
				<h4>Species: {species}{type.length>0?', ':null}{type}</h4>
                <h4>Status: {status}</h4>
                <h4>Location: {location.name}</h4>
				<p>{name} featured in <span className="episodeCount" onClick={this.handleClick} title="Click to see the episodes featured">{episodeFeatured.length}</span>
						{
							episodeFeatured.length > 1 ? ' Chapters' : ' Chapter'
						}
				</p>
				{
					this.state.showEpisodesFeatured ? 
						<div className="episodeNameContainer">
							{
								episodeFeatured.map(function(episodeName){
									return <p className="episodesTag" key={episodeName}>{episodeName}</p>	
								})
							}
						</div> : null
				}

              </div>
            </div>
        );
    }
}