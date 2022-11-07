/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {'secondary':'#3196D3',
    'primary': '#E4EEF3',
    'tertiary-1':'#535860',
    'tertiary-2': '#C6D7E1',
    'tertiary-3':'#B7D8EB',},
    backgroundImage: {
      'star1':"url('/star-1.png')",
      'sm-star':"url('/res1.png')",
      'star-2':"url('/list.png')",
    },
    fontSize: {
      'special': '2rem',
    },
    borderWidth:{
      'half':'0.5px',
    },

    },
  },
  plugins: [],
}