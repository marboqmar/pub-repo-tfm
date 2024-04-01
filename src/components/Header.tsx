import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/'}><img className={'logo'} src={'/logo.png'} alt={'Website logo'}/></Link>
            <Link className={'categoriesMenu'} to={'/categoria'}>Categorías</Link>
            <input id={'searchBar'} type={'text'} placeholder={'Buscar'} />
            <Link className={'myAccountMenu'} to={'mi-cuenta'}>Mi cuenta</Link>
            <Link to={'/favoritos'}>Favoritos</Link>
            <Link to={'/cesta'}>Cesta</Link>
        </div>
    );
};

export default Header;