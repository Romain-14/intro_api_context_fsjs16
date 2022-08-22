import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {GlobalContext} from '../context/globalContext';
// import la librairie font-awesome et le theme de l'icone (genre solid, regular ..)les installant avec :
// ->  npm i --save @fortawesome/free-solid-svg-icons
// ->  npm i --save @fortawesome/react-fontawesome@latest
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importer 
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const {toggleTheme, theme} = useContext(GlobalContext);
    console.log(theme)

    return (
        <header>
            <h1>Welcome to API CONTEXT ZE INTRO</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={""}>Sign In/Up</Link>
            </nav>
            <button onClick={toggleTheme}>{theme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
            
        </header>
    );
}

export default Header;
