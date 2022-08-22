// on import la méthode de react qui permets de créer un context
import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider (props) {

    const [theme, setTheme] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [userIsLogged, setUserIsLogged] = useState(false);
    // 
    const toggleTheme = () => {
        console.log("click")
        setTheme(!theme);
    }

    if(theme){
        document.body.classList.add("dark-mode");
    }  else {
        document.body.classList.remove("dark-mode");
    }
    // 

    const saveUser = (datas) => {
        console.log('context daveUser --> ', datas);
        setUserInfo(datas);
    }

    const logUser = (datas) => {
        if(datas.alias === userInfo.alias && datas.password === userInfo.password) {
            setUserIsLogged(true);
        } else {      
            // on retourne un message stocké dans une state pour avertir l'utilisateur       
            return "l'alias ou le mot de passe ne concorde(nt) pas !!";
        }

    }

    return (

        <GlobalContext.Provider value={{toggleTheme, theme, userIsLogged, userInfo, saveUser, logUser}}>

            {/* la children sera l'arborescence de notre app et aura pour value le composant <App />  */}
            {props.children} 

        </GlobalContext.Provider>


    )


}

export default GlobalContextProvider;