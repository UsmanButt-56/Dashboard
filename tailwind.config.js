/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow : {
        'custom-shadow' : '0px 4px 12px 0px rgba(0,0,0,0.07)',
        'custom-multi' : `
        -1px 4px 10px rgba(0,0,0,0.04),
        -4px 17px 18px rgba(0,0,0,0.03)`,
      },
    },
  },
  plugins: [
    
  ],
}

