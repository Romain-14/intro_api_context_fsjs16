import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route index path={"/"} element={<Home />} />
            </Routes>
        </Fragment>
    );
}

export default App;
