const { fontFamily, fontSize } = require("tailwindcss/defaultTheme");
const config = require("./src/styles/tailwind.theme.config.cjs");
const harmonyPalette = require("@evilmartians/harmony/tailwind");
const angularColors = require("./src/styles/angularColors.cjs");
const { colors } = config;

function withOpacityValue(variable) {
  return `rgb(var(${variable}) / <alpha-value>)`;
}

function withOKLCHOpacityValue(variable) {
  return `oklch(var(${variable}) / <alpha-value>)`;
}

const rem = (px) => `${round(px / 16)}rem`;

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
    require("tailwind-scrollbar"),
  ],
  theme: {
    data: {
      "toc-open": "toc=\"open\"",
      "toc-closed": "toc=\"closed\"",
    },
    fontFamily: {
      sans: ["Open Sans", ...fontFamily.sans],
      serif: ["Merriweather", ...fontFamily.serif],
    },
    fontSize: {
      ...fontSize,
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
    },
    colors: { ...colors, ...harmonyPalette, ...angularColors },
    extend: {
      maxWidth: {
        "1/2": "50%",
        content: "var(--content-max-width)",
      },
      boxShadow: {
        t: "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        admonition: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
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
          1fr [full-end]`,
        centered: `
          [full-start] 1fr
          [content-start] min(var(--prose-max-width), 100%) [content-end]
          1fr [full-end] `,
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
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(110%)",
          },
          "100%": {
            transform: "scale(100%)",
            opacity: 1,
          },
        },
        dialogAnimateOut: {
          "0%": {
            transform: "scale(100%)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0,
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-1000px 0",
          },
          "100%": {
            "background-position": "1000px 0",
          },
        },
        sway: {
          "0%, 100%": {
            transform: "rotate(-10deg) scale(1.5) translateY(4rem)",
          },
          "50%": {
            transform: "rotate(10deg) scale(1.5) translateY(2rem)",
          },
        },
        levitate: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(4px)",
          },
          "70%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        expand: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "expand-opacity": {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.3)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(1.295)",
          },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "-200% center",
          },
        },
      },
      animation: {
        pingOnce: "ping 1s cubic-bezier(0, 0, 0.2, 1) 1",
        dialogBounceIn: "dialogAnimateIn 300ms cubic-bezier(0.19, 1, 0.22, 1)",
        dialogAnimateIn: "dialogAnimateIn 300ms cubic-bezier(0.19, 1, 0.12, 1)",
        dialogAnimateOut: "dialogAnimateOut 300ms cubic-bezier(0.19, 1, 0.22, 1)",
        shimmer: "shimmer 2s infinite linear",
        sway: "sway 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        levitate: "levitate 5s ease infinite",
        expand: "expand 6s ease-out infinite both",
        "expand-opacity": "expand-opacity 6s linear infinite both",
        "text-gradient": "text-gradient 4s linear 0s infinite normal forwards running",
      },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-bounce": "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        "in-slow": "cubic-bezier(0.4, 0, 0, 1)",
        "out-slow": "cubic-bezier(0.6, 0.6, 0, 1)",
        pop: "cubic-bezier(.23,2,.73,.55)",
        "in-quint": "cubic-bezier(.755,.05,.855,.06)", // in-quint
        "out-quint": "cubic-bezier(.23,1,.32,1)", // out-quint
        "in-dialog": "cubic-bezier(0,0,.3,1)",
        DEFAULT: "cubic-bezier(.23,1,.32,1)", // out-quint
      },
      colors: {
        theme: {
          primary: withOpacityValue("--primary"),
          "on-primary": withOKLCHOpacityValue("--on-primary"),
          "on-background": withOpacityValue("--on-background"),
          background: withOKLCHOpacityValue("--background"),
          surface: withOpacityValue("--surface"),
          shadow: withOpacityValue("--shadow"),
          ...colors,
        },
      },
      backgroundImage: {
        none: "none",
        angularGradient:
          "linear-gradient( 140deg, var(--vivid-pink) 0%, var(--vivid-pink) 15%, color-mix(in srgb, var(--vivid-pink), var(--electric-violet) 50%) 25%, color-mix(in srgb, var(--vivid-pink), var(--electric-violet) 10%) 35%, color-mix(in srgb, var(--vivid-pink), var(--orange-red) 50%) 42%, color-mix(in srgb, var(--vivid-pink), var(--orange-red) 50%) 44%, color-mix(in srgb, var(--vivid-pink), var(--page-background) 70%) 47%, var(--electric-violet) 48%, var(--bright-blue) 60%",
      },
      typography: ({ theme }) => ({
        // dark: {
        // 	css: {
        // 		color: theme("colors.gray.200"),
        // 		blockquote: {
        // 			color: colors.dark.primary,
        // 			borderColor: colors.primary,
        // 		},
        // 		"blockquote > p::before, p::after": {
        // 			color: colors.primary,
        // 		},
        // 	},
        // },
        DEFAULT: {
          css: {
            fontSize: "1rem",
            "--tw-prose-headings": theme("colors.pink[900]"),
            p: {
              fontSize: "1rem",
            },
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
              fontSize: "1.5rem",
              color: colors.dark.secondary,
            },
            h2: {
              color: colors.dark.secondary,
            },
            h3: {
              color: colors.dark.secondary,
            },
            sm: {
              fontSize: "1rem",
            },
            lg: {
              h1: {
                fontSize: "1.5rem",
              },
            },
          },
        },
      }),
    },
  },
};
