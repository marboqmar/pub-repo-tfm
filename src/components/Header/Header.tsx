import './Header.scss';
import { Link } from 'react-router-dom';
import {useContext} from "react"
import { useTranslation } from 'react-i18next';
import { Button } from "../Button/Button.tsx";
import i18n from "i18next";
import { LanguageContext } from "../../contexts/LanguageContextProvider.tsx";

const ChangeLanguage = () => {
    const { t } = useTranslation('common')
    const { language, setNewLanguage } = useContext(LanguageContext)

    const handleLanguage = () => {
        if (language === 'es') {
            setNewLanguage('en')
        } else {
            setNewLanguage('es')
        }

        i18n.changeLanguage(language)
    }

    return (
        <Button className={'header--btn'} paddingSize={"none"} withoutHover color={'none'} borderType={'none'} onClick={handleLanguage}><img className={'icon'} src={'/icons/vector-language.png'} alt={''}/><small> {t('common:header.language')}</small></Button>
    )
}

const Header = () => {
    const { t } = useTranslation('common')
    return (
        <div className={'header display-flex-row gap-12'}>
            <Link to={'/'}><img className={'logo'} src={'/logo-header.png'} alt={'Website logo'}/></Link>
            <input id={'searchBar'} className={'searchBar font center-ver center-hor small'} type={'text'} placeholder={t('common:header.searchBarPlaceholder')}/>
            <div className={'header-buttons display-flex-row center-ver gap-36'}>
                <ChangeLanguage />
                <Button className={'header--btn'} paddingSize={"none"} withoutHover color={'none'} borderType={'none'}><img className={'icon'} src={'/icons/vector-account.png'} alt={''}/><small> {t('common:header.signIn')}</small></Button>
                <Link className={'header--btn'} to={'/cesta'}><img className={'icon'} src={'/icons/vector-cart.png'} alt={''}/><small> {t('common:header.cart')}</small></Link>
            </div>
        </div>
    );
};

export default Header;