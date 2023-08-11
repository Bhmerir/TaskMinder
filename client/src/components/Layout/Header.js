import react from 'react';

import tmLogo from '../../assets/images/tm-logo.png'
import classes from './Header.module.css';

import Button from '../UI/Button';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={tmLogo} alt='logo'/>
            <h1>TaskMinder</h1> 
            <Button >Login/SignUp</Button>
        </header>
        
    )
}

export default Header; 