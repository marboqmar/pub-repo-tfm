import './scss/style.scss'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h1>Landing</h1>
            <Link to={'/home'}>Visit shop</Link>
        </div>
    )
}

export default Landing;