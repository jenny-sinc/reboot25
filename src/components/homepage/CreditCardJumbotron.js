import React from 'react';
import '../../styles/CreditCardJumbotron.css';

function CreditCardJumbotron() {
    return (
        <div className="credit-card-jumbotron">
            <div className="credit-card">
                <div className="credit-card-header">Bank of Reboot</div>
                <div className="credit-card-number">**** **** **** 1234</div>
                <div className="credit-card-holder">Sam Jones</div>
            </div>
        </div>
    );
}

export default CreditCardJumbotron;