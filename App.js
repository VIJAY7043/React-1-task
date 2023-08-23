import React from 'react';
import './App.css';

const PriceCard = ({ plan, price, features, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="price-card" style={cardStyle}>
      <h2>{plan}</h2>
      <p className="price">${price}/month</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

const App = () => {
  const priceCards = [
    {
      plan: 'Basic Plan',
      price: 9.99,
      features: ['1 user', '10gb', 'unlimited public projects'],
      color: '#e57373',
    },
    {
      plan: 'Pro Plan',
      price: 19.99,
      features: [' 5 user', '50 gb', 'unlimited public projects'],
      color: '#81c784',
    },
    {
      plan: 'Premium Plan',
      price: 29.99,
      features: ['unlimited user', 'unlimited usage', 'unlimited storage'],
      color: '#64b5f6',
    },
  ];

  return (
    <div className="app">
      {priceCards.map((card, index) => (
        <PriceCard
          key={index}
          plan={card.plan}
          price={card.price}
          features={card.features}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default App;
