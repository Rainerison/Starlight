import LogoImage from '../../assets/Starlight.png';

export default function Contato() {
    return (
        <div className="sobre">
            <div className="image-container">
                <img src={LogoImage} alt="Logo" className="starlight-logo" />
            </div>
            <h2>Área de Contato para relatar alguma falhar ou para tirar dúvidas.</h2>
            <h2>Email:</h2>
            <h2>Telefone:</h2>
        </div>
    );
}