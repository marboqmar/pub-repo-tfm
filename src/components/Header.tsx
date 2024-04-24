import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation('common')
    return (
        <div className={'header'}>
            <Link to={'/'}><img className={'logo'} src={'/logo-header.png'} alt={'Website logo'}/></Link>
            <input id={'searchBar'} className={'searchBar font center-ver center-hor small'} type={'text'} placeholder={t('common:header.searchBarPlaceholder')}/>
            <div className={'header-buttons display-flex-row center-ver gap-36'}>
                <button className={'language font'}><img className={'icon'} src={'/icons/vector-language.png'}/><small> {t('common:header.language')}</small></button>
                <Link className={'myAccount font'} to={'mi-cuenta'}><img className={'icon'} src={'/icons/vector-account.png'}/><small> {t('common:header.myAccount')}</small></Link>
                <Link className={'cart font'} to={'/cesta'}><img className={'icon'} src={'/icons/vector-cart.png'}/><small> {t('common:header.cart')}</small></Link>
            </div>
        </div>
    );
};

export default Header;