const colors = require('tailwindcss/colors')

module.exports = {
    /**
     * Color Palette - Purple Heart
     */
     purpleheart: {
        colors: {
            primary: colors.purple[700],
            secondary: colors.purple[800],
            dark: {
                primary: colors.purple[300],
                secondary: colors.purple[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Pink Town
     */
    pinktown: {
        colors: {
            primary: colors.pink[700],
            secondary: colors.pink[800],
            dark: {
                primary: colors.pink[300],
                secondary: colors.pink[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Orange City
     */
    orangecity: {
        colors: {
            primary: colors.orange[700],
            secondary: colors.orange[800],
            dark: {
                primary: colors.orange[300],
                secondary: colors.orange[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Amber Sky
     */
    ambersky: {
        colors: {
            primary: colors.amber[700],
            secondary: colors.amber[800],
            dark: {
                primary: colors.amber[300],
                secondary: colors.amber[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Lime Route
     */
    limeroute: {
        colors: {
            primary: colors.lime[700],
            secondary: colors.lime[800],
            dark: {
                primary: colors.lime[300],
                secondary: colors.lime[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Indigone
     */
    indigone: {
        colors: {
            primary: colors.indigo[700],
            secondary: colors.indigo[800],
            dark: {
                primary: colors.indigo[300],
                secondary: colors.indigo[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Rose Garden
     */
    rosegarden: {
        colors: {
            primary: colors.rose[700],
            secondary: colors.rose[800],
            dark: {
                primary: colors.rose[300],
                secondary: colors.rose[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Default/Duplicate of Purple Heart (Never remove this)
     */
    default: {
        colors: {
            text: {
              primary:  "rgb(34, 41, 57)",
              secondary: "#364059",
              tertiary: "rgb(84, 101, 140)",
              light: "oklch(94.72% 0.03 308.97)" // amethyst.100
            },
            bg: {
                primary:  "#ffffff", 
                secondary: "rgb(243, 243, 243)",
                tertiary: "rgb(247, 247, 247)",
                dark: "#c2c2c2",
                gray:  colors.gray[300],
            },
            primary: colors.purple[700],
            secondary: colors.purple[800],
            tertiary: colors.purple[200],
            dark: {
                primary: colors.purple[300],
                secondary: colors.purple[500],
                background: colors.gray[900],
                backgroundSecondary: colors.gray[700],
                textPrimary: colors.gray[200],
            },
            accent: {
                gray: {
                    new: "rgb(243, 243, 243)",
                    light: colors.gray[300],
                    dark: colors.gray[500],
                    mid: colors.gray[400]
                },
                default: colors.blue[700]
            },
            purple: {
                50:   "#EFF2FE",
                100:  "#E1E7FD",
                200:  "#C9D2FA",
                300:  "#A8B4F6",
                400:  "#838CF1",
                500:  "#6466E9",
                600:  "#4F45DC",
                700:  "#4237C2",
                800:  "#36309D",
                900:  "#302E7C",
                950:  "#1D1B48",
            },
            // amethyst: {
            //     '50': 'hsl(270, 100%, 98%)',
            //     '100': 'hsl(271, 100%, 95%)',
            //     '200': 'hsl(271, 100%, 92%)',
            //     '300': 'hsl(271, 97%, 85%)',
            //     '400': 'hsl(271, 95%, 75%)',
            //     '500': 'hsl(271, 91%, 65%)',
            //     '600': 'hsl(271, 81%, 56%)',
            //     '700': 'hsl(271, 72%, 47%)',
            //     '800': 'hsl(271, 67%, 39%)',
            //     '900': 'hsl(271, 66%, 32%)',
            //     '950': 'hsl(271, 87%, 21%)',
            // },
            amethyst: {
                50:  'oklch(97.68% 0.01 308.30)',
                100: 'oklch(94.72% 0.03 308.97)',
                200: 'oklch(90.40% 0.06 308.72)',
                300: 'oklch(82.85% 0.11 307.59)',
                400: 'oklch(72.27% 0.18 305.91)',
                500: 'oklch(62.68% 0.23 303.90)',
                600: 'oklch(55.52% 0.25 301.63)',
                700: 'oklch(49.07% 0.24 300.37)',
                800: 'oklch(43.20% 0.20 301.37)',
                900: 'oklch(37.42% 0.17 302.11)',
                950: 'oklch(28.49% 0.14 299.74)',
            },
        }
    },
    calm: {
      colors: {
            primary: "#040404",
            secondary: "rgb(29, 77, 87)",
            active: "#000000",
            activeBg: "#efefef",
            accent:  {
                gray: {
                  light: "rgb(255, 255, 255)",
                  dark: "rgb(255, 255, 255)",
                  mid: "rgb(255, 255, 255)"
                },
                default: "rgb(255, 255, 255)",
            },
            dark: {
                primary: colors.purple[300],
                secondary: colors.purple[500],
                background: colors.gray[900],
                backgroundSecondary: colors.gray[700],
                textPrimary: colors.gray[200],
            },
            background: {
                primary:  "#f7f7f7", 
                secondary: "rgb(243, 243, 243)",
                tertiary: "rgb(247, 247, 247)",
                // https://coolors.co/f3f3f3-734b5e-565857-c589e8-e57a44
                "4": "ebebeb",
                "5": "e0e0e0",
                "6": "d6d6d6",
                "7": "cccccc",
                "8": "c2c2c2",
                "9": "b8b8b8",
                "10": "adadad",
                "11": "a3a3a3",
                "12": "999999",
                "13": "8f8f8f",
                "14": "858585",
                "15": "7a7a7a",
                "16": "707070",
                "17": "666666",
            },
        }
    },
}
