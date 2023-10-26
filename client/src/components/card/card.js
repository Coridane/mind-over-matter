import React from 'react';
import {
  GameCard,
} from './styles';

interface CardProps {
    id: number
    animation: boolean
    name: string
    image: string
    matched: boolean
    flipped: boolean
    onCoverClick: Function
  }
  const Card: React.FC<CardProps> = ({
    id,animation,name,image,matched,flipped,onCoverClick,
}) => (
    <GameCard
    id={id}
    movement={animations}
    image={image}
    data-name={name}
    check={flipped}
    match={match}
    onClick={(event) => onCoverClick(event,id)}
    />
    );
    
    export default Card;

