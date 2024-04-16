const MyAccount = () => {
    return (
        <div>
            <h1>Mi cuenta</h1>
            <div className={'myAccount'}>
                <div className={'myAccountMyImg'}>
                    <img className={'myAccountMyImgUserImg'} src={'/myAccountUserImage.png'} alt={'Imagen del usuario'}/>
                    <span>Cambiar mi foto</span>
                </div>
                <div>
                    <h2>Nombre</h2>
                    <div>
                        <span>John Smith</span>
                        <span>Cambiar nombre</span>
                    </div>
                    <h2>Correo</h2>
                    <div>
                        <span>john@smith.com</span>
                        <span>Cambiar correo</span>
                    </div>
                    <h2>Dirección</h2>
                    <div>
                        <span>Calle KeepHacking 1, puerta 1, 28001, Madrid, España</span>
                        <span>Cambiar dirección</span>
                    </div>
                    <h2>Contraseña</h2>
                    <div>
                        <span>Cambiar contraseña</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;