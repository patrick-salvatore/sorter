import React from 'react';

interface IAnchorTag {
  children: React.ReactChild;
  className?: string;
  href: string;
  newTab: boolean;
}

export const AnchorTag: React.FC<IAnchorTag> = (props): JSX.Element => {
  const { className, href, newTab } = props;

  return (
    <a
      className={className}
      href={href}
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
    >
      {props.children}
    </a>
  );
};
