const { fontFamily } = require("tailwindcss/defaultTheme");
const config = require("./src/styles/tailwind.theme.config.cjs");
const harmonyPalette = require("@evilmartians/harmony/tailwind");
const { colors } = config;

function withOpacityValue(variable) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["dark"],
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    data: {
      "toc-open": 'toc="open"',
      "toc-closed": 'toc="closed"',
    },
    fontFamily: {
      sans: ["Fira Code", ...fontFamily.sans],
    },
    colors: { ...colors, ...harmonyPalette },
    extend: {
      maxWidth: {
        "1/2": "50%",
        content: "var(--content-max-width)",
      },
      boxShadow: {
        t: "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
      },
      spacing: {
        "horizontal-padding": "var(--horizontal-padding)",
        "nav-height": "var(--nav-height)",
        "footer-height": "var(--footer-height)",
        "vert-padding": "var(--vert-padding)",
      },
      gridTemplateColumns: {
        layout: `
  		[full-start] 1fr
  		[content-start] calc(min(var(--content-max-width), 100%) - var(--horizontal-padding) * 2) [content-end]
  		1fr [full-end]
  	`,
      },
      gridColumn: {
        content: "content",
        full: "full",
      },
      // transitionDuration: {
      //    DEFAULT: '500ms',
      //    0: '0ms',
      // },
      keyframes: {
        dialogAnimateIn: {
          "0%" {
             transform: "scale(0)";
             opacity: 0
           },
           "50%" {
             transform: "scale(110%)";
           },
           "100%" {
             transform: "scale(100%)";
             opacity: 1
           }
        },
        dialogAnimateOut: {
          "0%" {
             transform: "scale(100%)";
             opacity: 1
           },
           "100%" {
             transform: "scale(0)";
             opacity: 0
           }
        }
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-bounce": "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        "in-slow": "cubic-bezier(0.4, 0, 0, 1)",
        "out-slow": "cubic-bezier(0.6, 0.6, 0, 1)",
        pop: "cubic-bezier(.23,2,.73,.55)",
        DEFAULT: "cubic-bezier(.23,1,.32,1)", // out-quint
        in2: "cubic-bezier(.755,.05,.855,.06)", // in-quint
        out2: "cubic-bezier(.23,1,.32,1)", // out-quint
      },
      colors: {
        theme: {
          primary: withOpacityValue("--primary"),
          "primary-hover": withOpacityValue("--primary-hover"),
          "on-primary": withOpacityValue("--on-primary"),
          divider: withOpacityValue("--divider"),
          shadow: withOpacityValue("--shadow"),
          "on-background": withOpacityValue("--on-background"),
          background: withOpacityValue("--background"),
          surface: withOpacityValue("--surface"),
          hover: withOpacityValue("--hover"),
          disabled: withOpacityValue("--disabled"),
          "on-disabled": withOpacityValue("--on-disabled"),
          note: withOpacityValue("--note"),
          warn: withOpacityValue("--warn"),
          ...colors,
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
            blockquote: {
              color: colors.dark.primary,
              borderColor: colors.primary,
            },
            "blockquote > p::before, p::after": {
              color: colors.primary,
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: colors.dark.primary,
              "&:hover": {
                color: colors.primary,
              },
            },
            blockquote: {
              color: colors.primary,
              fontSize: theme("fontSize.2xl"),
              borderColor: colors.dark.primary,
            },
            "blockquote > p::before, p::after": {
              color: colors.dark.primary,
            },
            h1: {
              color: colors.dark.secondary,
            },
            h2: {
              color: colors.dark.secondary,
            },
            h3: {
              color: colors.dark.secondary,
            },
          },
        },
      }),
    },
  },
};
