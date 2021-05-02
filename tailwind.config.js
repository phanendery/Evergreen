module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "sky-pattern": "url('https://wallpaperaccess.com/full/896979.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
