/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import './Card.scss';

interface ICardProps {
  imgSrc?: string;
  name?: string;
  title?: string;
}

export const Card: React.FC<ICardProps> = ({
  imgSrc,
  name,
  title,
}): JSX.Element => {
  return (
    <div className="card-main">
      <div className="img__wrapper">
        <img className="img" src={imgSrc} alt="Headshot" />
      </div>
      <div className="card__text__wrapper">
        <h4 className="card__text header">{name || title}</h4>
        <p className="card__text-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, hic?
        </p>
      </div>
    </div>
  );
};
