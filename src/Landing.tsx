import './scss/style.scss'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <h1>Landing</h1>
            <Link to={'/home'}>Visit shop</Link>
            <h2>Patterns</h2>
            <Link to={'/patterns'}>Patterns</Link>
        </>
    )
}

export default Landing;