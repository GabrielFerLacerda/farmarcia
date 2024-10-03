import React from 'react';
import Headers from './Headers'; // Importando a Navbar
import './produto.css'; // CSS do corpo





function Produto() {





    return (
        <div>
            <Headers />
            <div className="content">
                <section className="hero">
                    <h2>Bem-vindo à nossa Farmácia!</h2>
                    <p>Aqui você encontra os melhores produtos para sua saúde.</p>
                </section>

                {/* Cards circulares dos produtos */}
                <section className="circular-products">
                    <h3>Marcas em Destaque</h3>
                    <div className="circular-product-list">
                        <div className="circular-product-item">
                            <img src="https://www.promobit.com.br/blog/wp-content/uploads/2018/03/14190631/ar/1200/cupom.png" alt="Cupom" />
                        </div>
                        <div className="circular-product-item">
                            <img src="https://dmvfarma.vtexassets.com/arquivos/ids/250290-800-auto?v=638563020725730000&width=800&height=auto&aspect=true" alt="Carmed" />
                        </div>
                        <div className="circular-product-item">
                            <img src="https://applicativa-marketplace-prod.s3.amazonaws.com/produtos/chocolate-em-p-50-cacau-dois-frades-nestl--200g-0-7891000451304.webp" alt="Nestlé" />
                        </div>
                        <div className="circular-product-item">
                            <img src="https://www.callfarma.com.br/_next/image?url=https%3A%2F%2Fd2lakedouw4zad.cloudfront.net%2Fnutren-senior-sem-sabor-370g-84072.png&w=640&q=75" alt="Nutren" />
                        </div>
                        <div className="circular-product-item">
                            <img src="https://precopopular.vtexassets.com/arquivos/ids/208189-800-899?v=638374580767200000&width=800&height=899&aspect=true" alt="Pampers" />
                        </div>
                        <div className="circular-product-item">
                            <img src="https://mercantilnovaera.vtexassets.com/arquivos/ids/211110-800-450?v=638312669753970000&width=800&height=450&aspect=true" alt="Palmolive" />
                        </div>
                    </div>
                </section>



                {/* Produtos em destaque */}
                <section className="products">
                    <h3>Produtos em Destaque</h3>

                    <div className="product-list">
                        <div className="product-item">
                            <img src="https://drogariacristal.com/media/catalog/product/cache/dc75f304252411b8c602e1e96d99390d/a/c/actine-fresh-solar-corporal-fps.png" alt="Protetor solar" />
                            <h4>Protetor solar actine fresh corporal FPS 60 150G</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 48,90</span>
                                <span className="discount-price">R$ 32.76</span>
                                <span className="discount-percentage">33% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>

                            
                        </div>
                        <div className="product-item">
                            <img src="https://coopsp.vtexassets.com/arquivos/ids/224162/7891000325131.jpg?v=637919583538700000" alt="Carmed" />
                            <h4>Bombom Nestlé Especialidades 251g</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 15.49</span>
                                <span className="discount-price">R$ 13,94 </span>
                                <span className="discount-percentage">10% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>


                        </div>
                        <div className="product-item">
                            <img src="https://example.com/nestle.png" alt="Nestlé" />
                            <h4>Chocolate em Pó Nestlé 50% Cacau 200g</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 12,90</span>
                                <span className="discount-price">R$ 9,99</span>
                                <span className="discount-percentage">22% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>


                        </div>
                        <div className="product-item">
                            <img src="https://dgp88uvg9z4ut.cloudfront.net/Custom/Content/Products/68/47/68477_nutren-senior-370g-chocolate-p100613_m1_638424825116612903.png" alt="Nutren" />
                            <h4>Nutren Senior Sem Sabor 370g</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 49,90</span>
                                <span className="discount-price">R$ 39,90</span>
                                <span className="discount-percentage">20% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>


                        </div>
                        <div className="product-item">
                            <img src="https://superprix.vteximg.com.br/arquivos/ids/178031-600-600/Shampoo-Palmolive-Naturals-Ceramidas-Force-350ml.png?v=636712145150230000" alt="Palmolive" />
                            <h4>Shampoo Palmolive 350ml</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 15,90</span>
                                <span className="discount-price">R$ 12,50</span>
                                <span className="discount-percentage">21% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>


                        </div>
                        <div className="product-item">
                            <img src="https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/9/3/9343-sabonete-protex-85-g-balance-saud-g_1_.jpg" alt="Protex" />
                            <h4>Sabonete Protex 85g</h4>
                            <div className="price-info">
                                <span className="old-price">R$ 3,90</span>
                                <span className="discount-price">R$ 2,90</span>
                                <span className="discount-percentage">26% OFF</span>
                            </div>
                            <button className="buy-button">Comprar</button>


                        </div>
                    </div>
                </section>

                
                <section className="highlight-card">
                    <div className="big-card">
                        <h3>Promoção Especial</h3>
                        <p>Aproveite nossas promoções de fim de ano!</p>
                    </div>
                </section>

        
                <section className="about">
                    <h3>Sobre Nós</h3>
                    <p>Conheça mais sobre nossa farmácia e nossos valores.</p>
                </section>
            </div>
        </div>
    );
}

export default Produto;
