module.exports = {
    theme: {
      extend: {
        colors: { 
          midnight: 'var(--color-midnight)',
          lightgreen: 'var(--color-lightgreen)',
          burgendy: 'var(--color-burgendy)',
          blackish: 'var(--color-blackish)',
          grayish: 'var(--color-grayish)',

        },
        fontFamily: {
          baskerville: ['var(--font-baskerville)'],
          outfit: ['var(--font-outfit)'],
        },
      },
    }, 
    variants: {
      extend: {
        textColor: ['hover'],   
      },
    },
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
  };
  