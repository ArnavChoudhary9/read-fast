'use client';

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [testBegun, setTestBegun] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (testBegun) {
      setTimeout(() => { setShowButton(false) }, 300);
    } else {
      setShowButton(true);
    }
  }, [testBegun])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen animated-gradient relative">
      <TypeAnimation
        sequence={
          ['Test how fast can you read!', 1000]
        }
        wrapper="span"
        speed={75}
        className={`font-mono text-3xl text-white p-7 transition-transform duration-300 ease-in-out ${testBegun ? 'translate-y-10' : 'translate-y-0'
          }`}
      />

      {showButton && (
        <button
          className="rounded-full border font-thin text-3xl bg-transparent px-6 py-3 hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden border-white text-white relative z-10"
          onClick={() => setTestBegun(true)}
          style={{
            transform: testBegun ? 'scale(0)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          Start
        </button>
      )}
    </div>
  );
}

export default Home;
