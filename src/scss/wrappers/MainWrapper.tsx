import Header from '../../components/Header/Header.tsx'
import Footer from '../../components/Footer/Footer.tsx'

type Props = {
    children?: React.ReactNode
};

export const MainWrapper = ({children}: Props): React.ReactNode => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainWrapper