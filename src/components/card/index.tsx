import React from 'react';
import {Link} from "react-router-dom";
import './card.scss';

interface CardProps {
  readonly id: number;
  readonly name: string;
  readonly avatar?: string;
  readonly color?: string;
  readonly pantone_value?: string;
  readonly year?: number;
  readonly email: string;
  readonly category: string;
}


function Card({id, year, color, name, pantone_value, avatar, email, category}: CardProps) {
  const link = `/${category}/${id}`;

  const titleCard = name !== "undefined undefined" ? name : `Color: ${color}`;
  const smallTitle = email ? `Email: ${email}`: `Year: ${year}`;
  return (
    <div className="card">
      {avatar && <img src={avatar} alt={name}/>}
      {color && <div className="card__color" style={{backgroundColor: color}}/>}
      <h4>{titleCard}</h4>
      <small>{smallTitle}</small>
      {pantone_value && <small>Pantone value: {pantone_value}</small>}
      <Link className="button" to={link}>See more</Link>
    </div>
  );
}

export {Card};