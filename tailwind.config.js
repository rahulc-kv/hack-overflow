module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alabaster: '#F9FAFF',
        blackGreen: '#1A191C',
        blackCow: '#4A4844',
        blueBell: '#94A4C9',
        comet: '#5B6275',
        coralRed: '#F64040',
        davyGrey: '#4B5563',
        dawnPink: '#EBECED',
        greenHaze: '#07B055',
        greyCloud: '#B4B7BD',
        grey: '#999690',
        harp: '#E9EDF2',
        hawksBlue: '#D4DDFC',
        lightGrey: '#D9D9D9',
        lightOrange: '#FFEFE0',
        osloGrey: '#858D9D',
        paleGreen: '#EBFFF4',
        primaryColor: '#2653F1',
        rhino: '#394466',
        roseWhite: '#FFF6F6',
        santaGrey: '#9AA3B0',
        secondaryColor: '#5E7799',
        slateGrey: '#7E818D',
        whiteLilac: '#F6F6F6',
        whiteSmoke: '#F3F5F7',
        warningRed: '#F55E5E',
        mercury: '#E5E7EB',
        frenchBlue: '#0B78C2',
        tropicalBlue: '#CCDAEB',
        cloudyBlue: '#A6C9E1',
        softPeach: '#EDEDED'
      },
      animation: {
        'slide-to-left': 'slide-left 0.7s ease-in forwards',
        'slide-to-right': 'slide-right 0.7s ease-in forwards',
        'zoom-to-front': 'zoom-in 0.7s ease-in-out',
        'zoom-to-back': 'zoom-out 0.7s ease-in-out forwards',
        rotate: 'rotation 2s infinite',
        'loading-ellipsis': 'ellipsis steps(4,end) 900ms infinite',
        'slide-infinite': 'slide-back-and-forth 1.5s ease-out infinite',
        'opacity-anim': 'opacity-animate 1s infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        'slide-back-and-forth': {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        },
        'zoom-out': {
          '0%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(0.8)',
            opacity: 0
          }
        },
        rotation: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        ellipsis: {
          to: {
            width: '1.25rem'
          }
        },
        'opacity-animate': {
          '0%': {
            opacity: 0.4
          },
          '50%': {
            opacity: 0.6
          },
          '100%': {
            opacity: 1
          }
        }
      },
      spacing: {
        20: '20%'
      },
      width: {
        15: '15%',
        44: '44%',
        96: '96%',
        220: '220px',
        250: '250px',
        350: '350px'
      },
      height: {
        '40px': '40px',
        '100px': '100px',
        '550px': '550px'
      },
      fontFamily: {
        inter: ['Inter']
      },
      text: {
        '10px': '10px'
      },
      boxShadow: {
        shadowBottom: '0px 4px 4px rgba(91, 98, 117, 0.05)'
      },
      transitionPoperty: {
        height: 'height'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
