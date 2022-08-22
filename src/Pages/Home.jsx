import {useContext} from 'react';
import {GlobalContext} from '../context/globalContext';

function Home() {

    // on s'abonne à notre context courant pour consommer une donnée transmise dans le provider via la props value voir dans le fichier GlobalContext.jsx "--> <GlobalContext.Provider value={{info}}>"
    const {info} = useContext(GlobalContext);

    console.log(info);

  return (
    <h2>Welcome to my Home</h2>
  )
}

export default Home