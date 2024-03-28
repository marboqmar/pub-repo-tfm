import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

type Props = {
    children?: React.ReactNode
};

export const MainWrapper = ({children}: Props): React.ReactNode => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainWrapper