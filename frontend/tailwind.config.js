module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        fRAuto: '1fr auto',
        autoFr: 'auto 1fr',
      },
      maxHeight: {
        '120': '45rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

//  mode: 'jit',
