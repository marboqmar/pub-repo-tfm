import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <Link to={'/'}><img className={'logo'} src={'/logo-header.png'} alt={'Website logo'}/></Link>
            <Link className={'categoriesMenu'} to={'/categoria'}>{t('common:header.categories')}</Link>
            <input id={'searchBar'} type={'text'} placeholder={'Buscar'} />
            <Link className={'myAccountMenu'} to={'mi-cuenta'}>Mi cuenta</Link>
            <Link to={'/favoritos'}>Favoritos</Link>
            <Link to={'/cesta'}>Cesta</Link>
        </div>
    );
};

export default Header;