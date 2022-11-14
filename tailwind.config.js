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
      'star1':"url('/images/star-1.png')",
      'sm-star':"url('/images/res1.png')",
      'star-2':"url('/images/list.png')",
      'bottle':"url('/images/bottle.png')",
    },
    fontSize: {
      'special': '2rem',
    },
    borderWidth:{
      'half':'0.5px',
    },
    dropShadow:{
      'primary-shadow':['0 5px 20px rgba(49, 150, 211, 0.25)']
    }

    },
  },
  plugins: [],
}