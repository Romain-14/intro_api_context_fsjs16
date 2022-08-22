import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {GlobalContext} from '../../context/globalContext';
// import la librairie font-awesome 
// ->  npm i --save @fortawesome/free-solid-svg-icons
// ->  npm i --save @fortawesome/react-fontawesome@latest
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importer le theme de l'icone (genre solid, regular ..)
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
    // on s'abonne à notre context courant pour consommer une donnée transmise dans le provider via la props value voir dans le fichier GlobalContext.jsx "--> <GlobalContext.Provider value={{info}}>"
    const {toggleTheme, theme, userIsLogged} = useContext(GlobalContext);
    console.log(userIsLogged)

    
    return (
        <header>
            <h1>Welcome to API CONTEXT ZE INTRO</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                {
                    userIsLogged ? <Link to={"dashboard"}>Dashboard</Link>
                        :
                        <Link to={"userEntries"}>Sign In/Up</Link>

                }
            </nav>
            <button onClick={toggleTheme}>{theme ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
            
        </header>
    );
}

export default Header;
