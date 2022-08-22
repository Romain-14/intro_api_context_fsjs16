import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalContextProvider from "./context/globalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Router>
		{/* on englobe notre application du provider pour mettre à disposition de tous nos composant des states, on aura juste à "s'abonner" à notre contexte pour "consommer"  les states en question ( celle que l'on souhaite*/}
        <GlobalContextProvider>
			{/* le composant App sera une props children  */}
            <App /> 
        </GlobalContextProvider>
    </Router>
    /* </React.StrictMode> */
);
