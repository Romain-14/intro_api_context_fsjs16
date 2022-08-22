import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/globalContext";
import Form from "../../UI/Form";

function UserEntries() {
    const { userInfo, userIsLogged } = useContext(GlobalContext);

    useEffect(() => {
        getForm();
    }, [userInfo]);

    const getForm = () => {
        return userInfo === null ? "sign Up" : "sign In";
    };

    return (
        <main>
			{/* si l'user n'est pas connecté  */}
            {!userIsLogged ? (
                <>
                    <h2>page de connexion/enregistrement</h2>

                    <Form mode={getForm()} />
                </>
            )
				: <p>Salut toi !!</p> 
		}
        </main>
    );
}

export default UserEntries;
