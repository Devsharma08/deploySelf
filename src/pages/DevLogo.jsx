import React from 'react';

const DevSharmaLogo = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* SVG Badge */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" rx="40" fill="url(#grad)" />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Poppins', sans-serif"
          fontSize="90"
          fontWeight="800"
          fill="#ffffff"
        >
          DS
        </text>
      </svg>

      {/* Logo Text */}
      <h1 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-wide bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
        DEV SHARMA
      </h1>
    </div>
  );
};

export default DevSharmaLogo;
