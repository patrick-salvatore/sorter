import React from 'react';
import './Drawer.scss';

const Drawer = (props: any): JSX.Element => {
  return (
    <div data-testid="drawerComp" className="drawer__wrapper">
      {props.children}
    </div>
  );
};

export default Drawer;
