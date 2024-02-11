const colors = require("tailwindcss/colors");
const harmonyPalette = require("@evilmartians/harmony/tailwind");
const hexToRgb = (hex) => {
  const [, rr, gg, bb] = hex.match(
    /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
  );

  return `${parseInt(rr, 16)} ${parseInt(gg, 16)} ${parseInt(bb, 16)}`;
};

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
        secondary: colors.purple[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.pink[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.orange[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.amber[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.lime[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.indigo[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
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
        secondary: colors.rose[500],
      },
      accent: {
        gray: {
          light: colors.gray[300],
          dark: colors.gray[500],
        },
        default: colors.blue[700],
      },
    },
  },
  /**
   * Color Palette - Default/Duplicate of Purple Heart (Never remove this)
   */
  default: {
    colors: {
      text: {
        primary: "rgb(34, 41, 57)",
        secondary: "#364059",
        tertiary: "rgb(84, 101, 140)",
        light: "oklch(94.72% 0.03 308.97)", // amethyst.100
      },
      bg: {
        primary: "#ffffff",
        secondary: "rgb(243, 243, 243)",
        tertiary: "rgb(247, 247, 247)",
        dark: "#c2c2c2",
        gray: colors.gray[300],
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
          mid: colors.gray[400],
        },
        default: colors.blue[700],
      },
      purple: {
        50: "#EFF2FE",
        100: "#E1E7FD",
        200: "#C9D2FA",
        300: "#A8B4F6",
        400: "#838CF1",
        500: "#6466E9",
        600: "#4F45DC",
        700: "#4237C2",
        800: "#36309D",
        900: "#302E7C",
        950: "#1D1B48",
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
      new: {
        text: {
          secondary: 'lab(86.96% 0.87 -16.77)'
        },
        bg: `rgb(${hexToRgb("#A1C5E8")})`,
        dark: {
          bg: "bg-[#14111C]"
        },
        try2: {
          bg: "FDFAFC",
        },
        try3: {
          eureka: "#38b2ac",
          "primary-bg": "rgba(242, 242, 247, 1)",
          "secondary-bg": "rgba(255, 255, 255, 1)",
          "tertiary-bg": "rgba(242, 242, 247, 1)",
          "primary-text": "rgba(0, 0, 0, 0.85)",
          "secondary-text": "rgba(0, 0, 0, 0.7)",
          "tertiary-text": "rgba(0, 0, 0, 0.55)",
          font: "Lora,Noto Serif SC",
        },
        x: {
          cardBg: hexToRgb("#14111C"),
          blue:  hexToRgb('#316DE8'),
          blue2: hexToRgb('#193267'),
          accent: hexToRgb('#8CAEF2'),
          green1: hexToRgb('#42946E'),
          green2: hexToRgb('#1C3529'),
          greenAccent: hexToRgb('#95CFB4'),
          purple: hexToRgb('#843BCE'),
          purple2: hexToRgb('#2A1A3E'),
          purpleAccent: hexToRgb('#BFA3D0'),
        },
        zed: {
          backgroundColor: "rgb(221 228 241)",
          accentBlue: {
            default: "rgb(8 76 207)",
            10: "rgba(8, 76, 207, 0.1)",
            30: "rgba(8, 76, 207, 0.3)",
            5: "rgba(8, 76, 207, 0.05)",
          },
          bgBlack: {
            10: "rgba(0, 0, 0, 0.1)",
            20: "rgba(0, 0, 0, 0.2)",
            5: "rgba(0, 0, 0, 0.05)",
          },
          bgBlue: {
            500: "rgb(59 130 246)",
            10: "rgba(59, 130, 246, 0.1)",
          },
          bgGreen: {
            100: "rgb(220 252 231)",
          },
          bgNeautral: {
            default: "rgb(246 245 240)",
            100: "rgb(245 245 245)",
            200: "hsla(0, 0%, 90%, 0.2)",
          },
          bgRed: {
            100: "rgb(254 226 226)",
            30: "rgba(239, 68, 68, 0.3)",
            5: "rgba(239, 68, 68, 0.05)",
          },
          bgOffgray: {
            30: "rgba(75, 83, 97, 0.3)",
            50: "rgba(75, 83, 97, 0.5)",
          },
        },
        header: {
          text: "oklch(100% 0.000 0.000)",
          bg: "oklch(0.000 0.000 0.000)",
          accent: "oklab(1 0 0 / 0.148751)",
        },
        card: {
          link: "oklch(0.4176 0.057 358.34)",
          border: "oklch(58% 0.175 304.94 / 57.44%)", // colors.gray[100], // 'oklab(1 0 0 / 0.148751)',
          bg: harmonyPalette.indigo[100],// colors.gray[50], //'rgba(0, 0, 0, 0.06)'
          img: "oklch(0.5109 0.133 47.51)",
        },
        button: {
          text: "oklch(0.5109 0.133 47.51)",
          bg: "oklch(0.5109 0.133 47.51 / 0.15)",
        },
        blue: {
          text: "#201E7B",
          text2: "rgb(32 30 123/var(--tw-text-opacity",
          cardBg: "#F9FAFB",
          cardBgHover: "rgb(243 244 246/1)",
        },
      },
      amethyst: {
        50: "oklch(97.68% 0.01 308.30)",
        100: "oklch(94.72% 0.03 308.97)",
        200: "oklch(90.40% 0.06 308.72)",
        300: "oklch(82.85% 0.11 307.59)",
        400: "oklch(72.27% 0.18 305.91)",
        500: "oklch(62.68% 0.23 303.90)",
        600: "oklch(55.52% 0.25 301.63)",
        700: "oklch(49.07% 0.24 300.37)",
        800: "oklch(43.20% 0.20 301.37)",
        900: "oklch(37.42% 0.17 302.11)",
        950: "oklch(28.49% 0.14 299.74)",
      },
    },
  },
  calm: {
    colors: {
      primary: "#040404",
      secondary: "rgb(29, 77, 87)",
      active: "#000000",
      activeBg: "#efefef",
      accent: {
        gray: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(255, 255, 255)",
          mid: "rgb(255, 255, 255)",
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
        primary: "#f7f7f7",
        secondary: "rgb(243, 243, 243)",
        tertiary: "rgb(247, 247, 247)",
        // https://coolors.co/f3f3f3-734b5e-565857-c589e8-e57a44
        4: "ebebeb",
        5: "e0e0e0",
        6: "d6d6d6",
        7: "cccccc",
        8: "c2c2c2",
        9: "b8b8b8",
        10: "adadad",
        11: "a3a3a3",
        12: "999999",
        13: "8f8f8f",
        14: "858585",
        15: "7a7a7a",
        16: "707070",
        17: "666666",
      },
    },
  },
};
