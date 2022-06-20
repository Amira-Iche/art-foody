module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
      screens: {
        'sm': '300px',
        // => @media (min-width: 576px) { ... }
        'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1440px) { ... }
      
      },
    
    },
 
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
