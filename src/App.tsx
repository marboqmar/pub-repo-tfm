import './scss/style.scss'
// import { Link } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from "./components/Footer.tsx";
import {Outlet} from "react-router-dom";

function App() {
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
