import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Welcome to API CONTEXT ZE INTRO</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>Sign In/Up</Link>
            </nav>
        </header>
    );
}

export default Header;
