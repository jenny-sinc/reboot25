import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OpenBanking.css';

const OpenBanking = () => {
    const [selectedAccounts, setSelectedAccounts] = useState([]);
    const navigate = useNavigate();

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

    const handleAddClick = () => {
        // Redirect to FormFeature at step 2
        navigate('/form-feature?step=2');
    };

    return (
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
                    onClick={handleAddClick}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default OpenBanking;