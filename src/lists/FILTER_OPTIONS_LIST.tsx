import { useTranslation } from 'react-i18next';

const FILTER_OPTIONS_LIST = (): string[] => {
    const { t } = useTranslation('home')

    return ['The Witcher', 'Elden Ring', t('home:filterOptions.D&D'), t('home:filterOptions.LOTR')];
}

export default FILTER_OPTIONS_LIST;
