import { useTranslation } from 'react-i18next';
import { Filter } from "../models";

const FILTER_OPTIONS_LIST = (): Filter[] => {
    const {t} = useTranslation('home')

    // return ['The Witcher', 'Elden Ring', t('home:filterOptions.D&D'), t('home:filterOptions.LOTR')];

    return [
        {
            name: 'The Witcher',
            key: 'The Witcher'
        },
        {
            name: 'Elden Ring',
            key: 'Elden Ring'
        },
        {
            name: t('home:filterOptions.D&D'),
            key: 'Dungeons & Dragons'
        },
        {
            name: t('home:filterOptions.LOTR'),
            key: 'The Lord of the Rings'
        }
    ]
}

export default FILTER_OPTIONS_LIST;
