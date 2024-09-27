import React from 'react';
import Headers from './Headers'; 
import './body.css'; 


const Home = () => {
    return (
        <div>
            <Headers />
            <div className="home-content">
                <section className="hero-section">
                    <h2>Bem-vindo à nossa nova farmácia!</h2>
                    <p>Estamos empolgados em apresentar a nossa nova direção e convidá-lo para a nossa inauguração!</p>
                    <img src="/public/image/farmarcia.png" alt="Nova Farmácia" className="hero-image" />
                </section>

                <section className="about-section">
                    <h3>Sobre a Nova Direção</h3>
                    <p>Nossa farmácia agora conta com uma nova equipe dedicada a oferecer o melhor em produtos de saúde e bem-estar. Temos orgulho em atender a comunidade e proporcionar um ambiente acolhedor e amigável.</p>
                </section>

                <section className="invitation-section">
                    <h3>Convite para a Inauguração</h3>
                    <p>Junte-se a nós para celebrar a nossa nova fase!</p>
                    <p><strong>Data:</strong> 15 de Outubro de 2024</p>
                    <p><strong>Horário:</strong> 10:00 - 16:00</p>
                    <p><strong>Local:</strong> Avenida Principal, 123, Sua Cidade</p>
                    <button className="invite-button">Confirme sua Presença!</button>
                </section>

                <section className="gallery-section">
                    <h3>Galeria</h3>
                    <div className="gallery">
                        <img src="" alt="Imagem 1" />
                        <img src="" alt="Imagem 2" />
                        <img src="" alt="Imagem 3" />
                        <img src="" alt="Imagem 4" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;
