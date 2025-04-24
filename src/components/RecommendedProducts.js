import React from 'react';
import '../styles/RecommendedProducts.css'; // Reuse the existing styles
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const RecommendedProducts = () => {
    const products = [
        {
            id: 1, brand: 'Halifax', coleagueOffer: true, name: 'Rewards current account', description: `Get rewarded for everyday banking with monthly offers, exclusive savings, and cashback for a £3 monthly fee. If you pay in £1,500 or more each month, you won't pay the fee.`
        },
        {
            id: 2, brand: 'Lloyds', coleagueOffer: false, name: 'Club Lloyds Platinum', description: `Premium current account£22.50 per month +£3 Club Lloyds monthly fee which is refunded each month you pay in £2,000 or more`
        },
        {
            id: 3, brand: 'Bank of Scotland', coleagueOffer: true, name: 'Silver account', description: `Our account that offers you a range of everyday benefits.European family travel insurance, AA Breakdown Family Cover, Mobile phone insurance and no debit card fees from us when you use your card abroad for a £11.50 monthly fee.`
        },
    ];

    return (
        <div>
            <div className="recommended-products">
                <h1>Hi Sam</h1>
                <p>We think you could benefit from these products...</p>
                <div className="carousel">
                    {products.map((product) => (
                        <div key={product.id} className="carousel-item">
                            <h3 style={{ marginBottom: "0.5rem" }}>{product.name}</h3>
                            <div style={{ height: "7rem", justifyContent: "center" }}>
                                <p style={{ width: "90vw" }}>{product.description}</p>
                            </ div>
                            <div className={`credit-card credit-card-${product.id}`}>
                                {(product.id === 1 || product.id === 3) ? <div className="badge">Colleague Only Offer</div> : null}
                                <div className="credit-card-header">{product.brand}</div>
                                <div className="credit-card-number">**** **** **** 1234</div>
                                <div className="credit-card-holder">Joe Bloggs</div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <br />
                <button className="show-me-more-button">Show me more products</button>
                <br />
                <br />
                <div className="rewards-card">
                    <p>
                        Unlock more rewards by taking part in our new challenges!
                    </p>
                    <i className="bi bi-award"></i>
                </div>
            </div>
        </div>
    );
};

export default RecommendedProducts;
