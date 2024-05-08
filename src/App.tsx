import './scss/style.scss'
import Header from './components/Header/Header.tsx'
import Footer from "./components/Footer/Footer.tsx";
import { SearchContextProvider } from "./contexts/SearchContextProvider.tsx";
import {Outlet} from "react-router-dom";
// import {Outlet, useLocation} from "react-router-dom";
// import {useEffect} from "react";

function App() {
    // const {pathname} = useLocation();
    //
    // useEffect(() => {
    //     window.scroll(0, 0);
    //
    // }, {pathname})

    return (
        <>
            <SearchContextProvider>
                <Header />
                <div className={'main'}>
                    <Outlet />
                </div>
                <Footer />
            </SearchContextProvider>
        </>
    )
}

export default App
