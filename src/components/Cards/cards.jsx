import React, { Component } from 'react';
import Card from './Card/card.jsx';
import '../../../character-cards.css';

class CharacterCards extends Component {
  render() {
    const characters= this.props.characters.sort((a,b)=>a.name.localeCompare(b.name));
    return (
      <section id="character-cards">
        {characters.map((character, index) => (
          <Card key={index} card={character} />
        ))}
      </section>
    );
  }
}

export default CharacterCards;
