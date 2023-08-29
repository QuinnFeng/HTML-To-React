import React from 'react';
import '../../../character-ratings.css';
import './table.css';

const CharacterTable = ({characters}) => {

  characters.sort((a,b)=>b.votes-a.votes);

  return (
    <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {characters.slice(0,5).map((character,index) => (
                <tr key={character.name} className={index % 2 === 0 ? 'dark' : 'light'}>
                    <td>{character.name}</td>
                    <td>{character.skillset.join(', ')}</td>
                    <td>{character.votes}</td>
                </tr>
            ))}
          </tbody>
        </table>
    </section>
  );
};

export default CharacterTable;
