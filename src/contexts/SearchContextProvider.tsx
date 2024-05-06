import {createContext, ReactNode, useState} from 'react';

interface SearchContextModel {
    search: string;
    setNewSearch: (search: string) => void;
}

const contextDefault: SearchContextModel = {
    search: '',
    setNewSearch: () => {
        return
    }
};

export const SearchContext = createContext<SearchContextModel>(contextDefault);

interface SearchContextProviderProps {
    children: ReactNode;
}

export const SearchContextProvider = ({ children }: SearchContextProviderProps): JSX.Element | null => {
    const [search, setSearch] = useState<string>('');

    const contextValue: SearchContextModel = {
        search,
        setNewSearch: setSearch
    }

    return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};