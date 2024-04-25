import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Button} from "./Button.tsx";

const Header = () => {
    const { t } = useTranslation('common')
    return (
        <div className={'header display-flex-row gap-12'}>
            <Link to={'/'}><img className={'logo'} src={'/logo-header.png'} alt={'Website logo'}/></Link>
            <input id={'searchBar'} className={'searchBar font center-ver center-hor small'} type={'text'} placeholder={t('common:header.searchBarPlaceholder')}/>
            <div className={'header-buttons display-flex-row center-ver gap-36'}>
                {/*Once button component properly set up remove class color-black from this button*/}
                <Button className={'language display-flex-row align-center gap-12 height-24'} withoutPadding withoutHover color={'none'}><img className={'icon'} src={'/icons/vector-language.png'}/><small> {t('common:header.language')}</small></Button>
                <Link className={'myAccount font display-flex-row align-center gap-12 height-24'} to={'mi-cuenta'}><img className={'icon'} src={'/icons/vector-account.png'}/><small> {t('common:header.myAccount')}</small></Link>
                <Link className={'cart font display-flex-row align-center gap-12 height-24'} to={'/cesta'}><img className={'icon'} src={'/icons/vector-cart.png'}/><small> {t('common:header.cart')}</small></Link>
            </div>
        </div>
    );
};

export default Header;