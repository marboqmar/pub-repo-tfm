import Header from '../../components/Header.tsx'
import Footer from '../../components/Footer.tsx'

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