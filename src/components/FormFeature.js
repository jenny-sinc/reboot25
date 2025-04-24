import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormFeature.css';
import Header from './Header';

const FormFeature = () => {

    const [selectedAccounts, setSelectedAccounts] = useState([]);
    // const navigate = useNavigate();

    const accounts = [
        { id: 1, name: 'Halifax Current Account', number: '**** **** **** 1234' },
        { id: 2, name: 'Lloyds Savings Account', number: '**** **** **** 5678' },
        { id: 3, name: 'Bank of Scotland Credit Card', number: '**** **** **** 9101' },
        { id: 4, name: 'Monzo Current Account', number: '**** **** **** 1122' },
        { id: 5, name: 'Starling Savings Account', number: '**** **** **** 3344' },
    ];

    const handleAccountToggle = (id) => {
        setSelectedAccounts((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((accountId) => accountId !== id) // Deselect if already selected
                : [...prevSelected, id] // Add to selected if not already selected
        );
    };

    const [step, setStep] = useState(1);
    const [financialLiteracy, setFinancialLiteracy] = useState(0);
    const [techLiteracy, setTechLiteracy] = useState(0);
    const navigate = useNavigate();

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const progress = (step / 6) * 100;

    const redirectToStep = (step) => {
        navigate(`${step}`, { replace: true });
    };

    const renderStars = (rating, setRating) => {
        return (
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${rating >= star ? 'filled' : ''}`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div>
            <Header />

            <div className="form-feature">
                <h1>Let's get to know you</h1>
                <p>So we can offer you benefits most suited to you, let's understand more about you.</p>

                <div className="form-questions">
                    <div className="form-content">
                        {step === 1 && (
                            <div>
                                <p>Would you like to link OpenBanking so we can get a better view of your financial portfolio?</p>
                                <button className="button-secondary" onClick={nextStep}>No thanks</button>
                                <button
                                    className="button-primary"
                                    onClick={nextStep}
                                >
                                    Link now
                                </button>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="open-banking">
                                <h1>Link Your Bank Account</h1>
                                <p>Select one or more accounts to link with Open Banking:</p>
                                <ul className="account-list">
                                    {accounts.map((account) => (
                                        <li
                                            key={account.id}
                                            className={`account-item ${selectedAccounts.includes(account.id) ? 'selected' : ''}`}
                                            onClick={() => handleAccountToggle(account.id)}
                                        >
                                            <span className="account-name">{account.name}</span>
                                            <span className="account-number">{account.number}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="button-group">
                                    <button className="button-secondary" onClick={() => navigate('/')}>Cancel</button>
                                    <button
                                        className="button-primary"
                                        disabled={selectedAccounts.length === 0}
                                        onClick={nextStep}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>)}
                        {step === 3 && (
                            <div>
                                <p>What products/services are you interested in understanding more about?</p>
                                <div className="checkbox-group">
                                    <label className="checkbox-item">
                                        <input type="checkbox" />
                                        <span className="custom-checkbox"></span>
                                        Savings
                                    </label>
                                    <label className="checkbox-item">
                                        <input type="checkbox" />
                                        <span className="custom-checkbox"></span>
                                        Mortgages
                                    </label>
                                    <label className="checkbox-item">
                                        <input type="checkbox" />
                                        <span className="custom-checkbox"></span>
                                        Current account
                                    </label>
                                </div>
                                <br />
                                <button className="button-secondary" onClick={prevStep}>Back</button>
                                <button className="button-primary" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <p>Is there anything specific you'd like to know more about?</p>
                                <textarea
                                    className="free-text-area"
                                    placeholder="Type your response here..."
                                    rows="5"
                                    style={{ width: '90%', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                ></textarea>
                                <br />
                                <button className="button-secondary" onClick={prevStep}>Back</button>
                                <button className="button-primary" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 5 && (
                            <div>
                                <p>How would you rate your financial literacy?</p>
                                {renderStars(financialLiteracy, setFinancialLiteracy)}
                                <button className="button-secondary" onClick={prevStep}>Back</button>
                                <button className="button-primary" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 6 && (
                            <div>
                                <p>How would you rate your tech literacy?</p>
                                {renderStars(techLiteracy, setTechLiteracy)}
                                <button className="button-secondary" onClick={prevStep}>Back</button>
                                <button className="button-primary" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 7 && (
                            <div>
                                <p>Are you ready to see what we have in store?</p>
                                <button className="button-primary" onClick={() => navigate('/recommended-products')}>Let's Go!</button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default FormFeature;