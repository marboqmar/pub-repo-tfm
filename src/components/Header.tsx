import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <Link to={'/'}><img className={'logo'} src={'/logo-header.png'} alt={'Website logo'}/></Link>
            <Link className={'categoriesMenu'} to={'/categoria'}>{t('common:header.categories')}</Link>
            <input id={'searchBar'} type={'text'} placeholder={t('common:header.searchBarPlaceholder')} />
            <Link className={'myAccountMenu'} to={'mi-cuenta'}>{t('common:header.myAccount')}</Link>
            <Link to={'/favoritos'}>{t('common:header.favourites')}</Link>
            <Link to={'/cesta'}>{t('common:header.cart')}</Link>
        </div>
    );
};

export default Header;