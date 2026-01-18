import React, { useState } from 'react';

// --- Styled Components defined in one file to prevent import errors ---

const Header = () => (
  <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '10px' }}>
    <h1>My Favorite Cities</h1>
  </header>
);

const UserProfile = (props) => (
  <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
    <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{props.name}</h2>
    <p style={{ fontSize: '1.1em' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
  </div>
);

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
};

const MainContent = () => (
  <main style={{ padding: '20px', backgroundColor: '#f0f0f0', lineHeight: '1.6' }}>
    <p style={{ fontSize: '18px', color: '#333' }}>I love to visit New York, Paris, and Tokyo.</p>
  </main>
);

const Footer = () => (
  <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '15px', marginTop: '20px' }}>
    <p>© 2023 City Lovers</p>
  </footer>
);

// --- Main App Component ---

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <Counter />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <MainContent />
      <Footer />
    </div>
  );
}