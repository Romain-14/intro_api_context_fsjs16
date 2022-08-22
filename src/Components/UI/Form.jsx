import {useState, useContext} from "react";
import {GlobalContext} from '../../context/globalContext';

function Form({ mode }) {

    const {saveUser, logUser} = useContext(GlobalContext);
    const [userInfos, setUserInfos] = useState({alias: "", password: ""});
    const [msg, setMsg] = useState(null);

    const updateStateUser = (input) => {
        // console.log(input.value);
        // mise à jour de ma state qui gère les infos des inputs avec une fonction anonyme qui prends en paramètre la valeur précédente 
        if(input.name === "alias") setUserInfos(userInfos => ({...userInfos, alias: input.value}));
        if(input.name === "password") setUserInfos(userInfos => ({...userInfos, password: input.value}));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // en fonction du mode de formulaire, j'invoque soit une fonction de connexion ou d'enregistrement de mon contexte
        if(mode === "sign Up") saveUser(userInfos);
        if(mode === "sign In") {
            setMsg(logUser(userInfos));
        }
        setUserInfos({alias: "", password: ""});
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <fieldset>
                <legend>{mode}</legend>
                {console.log(userInfos)}
                <input
                    type="text"
                    placeholder="alias"
                    name="alias"
                    // two ways databinding - controlled Component
                    // pour utiliser uncontrolled Component il faut passer par un useRef celui ci ne provoque pas de re-render, on perds en dynamisme
                    onChange={(e) => updateStateUser(e.target)}
                    value={userInfos?.alias}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => updateStateUser(e.target)}
                    value={userInfos?.password}
                />
            <input type="submit" value={mode === "sign Up" ? "sign Up" : "sign In"}/>
            
            {msg !== null && <p>{msg}</p>}

            </fieldset>

        </form>
    );
}

export default Form;
