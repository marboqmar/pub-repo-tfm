import { ReactNode, createContext, useState } from 'react';

// Created language context to be able to change landing's hero image upon changing language

type LanguageOptions = 'es' | 'en'

interface LanguageContextModel {
    language: LanguageOptions;
    setNewLanguage: (language: LanguageOptions) => void;
}

const contextDefault: LanguageContextModel = {
    language: 'es',
    setNewLanguage: () => {
        return
    }
};

export const LanguageContext = createContext<LanguageContextModel>(contextDefault);

interface LanguageContextProviderProps {
    children: ReactNode;
}

export const LanguageContextProvider = ({ children }: LanguageContextProviderProps): JSX.Element | null => {
    const [language, setLanguage] = useState<LanguageOptions>('es')

    const contextValue: LanguageContextModel = {
        language,
        setNewLanguage: setLanguage
    }

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};

