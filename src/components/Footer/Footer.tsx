import './Footer.scss';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className={'footer display-flex-row align-center gap-36'}>
            <h3>Footer</h3>
            <Link className={'color-white'} to={'/libreria'}>Pattern library</Link>
        </div>
    )
}

export default Footer;