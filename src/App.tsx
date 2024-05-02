import './scss/style.scss'
// import { Link } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import Footer from "./components/Footer/Footer.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

function App() {
    // const {pathname} = useLocation();
    //
    // useEffect(() => {
    //     window.scroll(0, 0);
    //
    // }, {pathname})

    return (
        <>
            <Header />
            <div className={'main'}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App
