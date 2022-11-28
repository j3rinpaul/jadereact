import {useEffect} from 'react';
import React from 'react'


export default function ScrollTop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '0.5rem 1rem',
          fontSize: '20px',
          bottom: '80px',
          right: '20px',
          border:"none",
          borderRadius: '8px',
          backgroundColor: '#FF9C00',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        ^
      </button>
    </div>
  );
}
