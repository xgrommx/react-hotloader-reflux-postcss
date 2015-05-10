module.exports = {
  autoprefixer: {
    browsers: [
      'iOS >= 8',
      'Android >= 4.4',
      'Explorer >= 11'
    ]
  },
  customMedia: {
    extensions: {
      '--sm-viewport': '(min-width:0)',
      '--md-viewport': '(min-width:680px)',
      '--lg-viewport': '(min-width:1040px)',
      '--sm-viewport-only': '(max-width:679px)',
      '--md-viewportHeight': '(min-height: 640px)',
      '--portrait': '(orientation: portrait)',
      '--landscape': '(orientation: landscape)'
    }
  },
  customProperties: {
    variables: {
      /**
       * Typography
       */
      '--fontFamily': '"Helvetica Neue", Helvetica, Arial, sans-serif',
      '--fontFamilySerif': 'Georgia, Times, "Times New Roman", serif',
      '--fontWeightLight': '300',
      '--fontWeightRegular': '400',
      '--fontWeightBold': '700',
      '--fontSize': '1.4rem',
      '--lineHeight': '1.3125',

      /**
       * Color palette
       */
      '--color-white': '#FFF',
      '--color-offWhite': '#FAFAFA',
      '--color-black': '#000',
      '--color-red': '#FF0000'
    }
  }
};
