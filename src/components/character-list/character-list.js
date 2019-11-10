import React from 'react';
import {CharacterCard} from "../character-card/character-card"

export class CharacterList extends React.Component{
    render(){
    	return (
        	<div className="characters">
				{
					this.props.characterData.map(character => {
            			return <CharacterCard character={character} chapter={this.props.episodeData} key={character.id}/>;
            		})
				}
        	</div>
      	);
    }
}