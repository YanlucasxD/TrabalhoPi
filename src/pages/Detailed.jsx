import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gamelist from '../components/games.json';


export default function Detailed() {
  const { id } = useParams();

  const game = gamelist[id]


  return (
    <section className="grid detailed">
      <h1>{game.title}</h1>
      <strong>{game.subtitle}</strong>
      <div>
        {game.description.map(content => {
          if( content.type === "paragraph"){
            return <p>{content.text}</p>
          } else if( content.type === "image"){
            return <img src={content.link} />
          }
          else return <h2>{content.text}</h2>
        }
        ) }
        </div>
    </section>
  )
}