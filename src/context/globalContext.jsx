// on import la méthode de react qui permets de créer un context
import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider (props) {

    const [info, setInfo] = useState({id: 1, alias: "Ro", });


    return (

        
        <GlobalContext.Provider value={{info}}>

            {/* la children sera l'arborescence de notre app et aura pour value le composant <App />  */}
            {props.children} 

        </GlobalContext.Provider>


    )


}

export default GlobalContextProvider;