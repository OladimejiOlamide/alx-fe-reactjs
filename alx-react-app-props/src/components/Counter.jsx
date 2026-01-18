import { useState } from 'react';

function Counter() {
    // Initialize state with a count of 0
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
}

export default Counter;