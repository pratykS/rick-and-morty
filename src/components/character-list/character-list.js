import React from 'react';
import {CharacterCard} from "../character-card/character-card"

export class CharacterList extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
      // console.log(this.props.characterEpisode)
        return (
            <div className="characters">
              <h2>List of Characters:</h2>
              {this.props.characterData.map(character => {
                return <CharacterCard character={character} key={character.id}/>;
              })}
            </div>
          );
    }
}