import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserEntries from './Components/Pages/user/UserEntries';
import Header from "./Components/UI/Header";

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route index path={"/"} element={<Home />} />
                <Route index path={"userEntries"} element={<UserEntries />} />
            </Routes>
        </Fragment>
    );
}

export default App;
