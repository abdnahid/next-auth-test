import React from 'react';
import classes from './headerDropdown.module.css';

const HeaderDropdown = ({ show }) => {
  return show && <div className={classes.dropdown}>HeaderDropdown</div>;
};

export default HeaderDropdown;
