import React from 'react';

import classes from  './Topbar.module.css';
const Topbar = () => {
    return(
        <header>
        <nav className={classes.Topbar}>
          <img src="https://m.media-amazon.com/images/I/31%2BDgxPWXtL.jpg" alt="Amazon Logo" />
        </nav>
        </header>
    )
}

export default Topbar;