import '../scss/components/Hero.scss';

const Hero = () => {
    return (
        <div className={'hero'}>
            <h1>Las espadas de tus personajes favoritos al alcance de tu mano</h1>
            <img src={'/sword.png'}/>
        </div>
    );
};

export default Hero;