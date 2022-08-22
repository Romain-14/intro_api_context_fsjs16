// on import la méthode de react qui permets de créer un context
import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider (props) {

    const [info, setInfo] = useState({id: 1, alias: "Ro", });

    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        console.log("click")
        setTheme(!theme);
    }

    if(theme){
        document.body.classList.add("dark-mode");
    }  else {
        document.body.classList.remove("dark-mode");
    }

    return (

        <GlobalContext.Provider value={{toggleTheme, theme, info}}>

            {/* la children sera l'arborescence de notre app et aura pour value le composant <App />  */}
            {props.children} 

        </GlobalContext.Provider>


    )


}

export default GlobalContextProvider;