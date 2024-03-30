import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div>
          <img className={'logo'} src={'../../public/logo.png'} alt={'Website logo'}/>
          <button className={'categoriesMenu'}>Categorías</button>
          <input id={'searchBar'} type={'text'} placeholder={'Buscar'} />
          <button className={'myAccountMenu'}>Mi cuenta</button>
          <Link to={'./favoritos'}>Favoritos</Link>
          <Link to={'./cesta'}>Cesta</Link>
      </div>
  );
};

export default Header;