import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_V9-A_eD8.mjs';
import { c as $$Image } from './pages/about_mRcxcZE_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Speculation rules API",
  "description": "How to use the speculation rules API to create a custom speculative parser for your website.",
  "pubDate": "Jan 30 2024",
  "cover": "./assets/speculation-rules.png",
  "coverAlt": "Speculation rules can be seen in the new 'Preloading' section of Chrome Developer Tools",
  "tags": ["web-standards", "speculation-rules"],
  "draft": true
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "integration-of-speculation-rules-api-with-astrojs",
    "text": "Integration of Speculation Rules API with AstroJS"
  }, {
    "depth": 2,
    "slug": "prerendering-with-speculation-rules-api",
    "text": "Prerendering with Speculation Rules API"
  }, {
    "depth": 2,
    "slug": "concluding-remarks",
    "text": "Concluding Remarks"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Enabling the Speculation Rules API with AstroJS"
    }), "\n", createVNode(_components.p, {
      children: "In the modern web development landscape, page loading speed is integral to user\nexperience. any web application. Speculation Rules API, an experimental feature,\nis pretty much a game changer, as page loads will become instant as the client\nfetches them, based on pre-configured rules. This post is intended to guide\ndevelopers through the process of integrating the Speculation Rules API with\nAstroJS."
    }), "\n", createVNode(_components.h2, {
      id: "integration-of-speculation-rules-api-with-astrojs",
      children: "Integration of Speculation Rules API with AstroJS"
    }), "\n", createVNode(_components.p, {
      children: ["AstroJS is my favorite frontend framework, because it allows you to create a\n\u201Cturtles all the way down\u201D-style component heirarchy ", createVNode(_components.a, {
        href: "",
        children: "@fn1"
      }), ". This means you can\nuse Svelte components, inside of Astro components, inside of Lit components, and\nso-on. This is a great way to learn a new framework, and in my opinion, this is\nthe best framework for developing \u201Cdeveloper blogs\u201D, as many others have also\ndone. This site is implemented in AstroJS as well. is a front-end framework that"]
    }), "\n", createVNode(_components.p, {
      children: "AstroJS enables you to pre-render your prefetched pages on the client in\nsupported browsers[^5^]. Additionally, AstroJS overrides the standard prefetch\nbehavior, globally applying the Speculation Rules API to prerender links on the\nclient[^4^]."
    }), "\n", createVNode(_components.p, {
      children: ["This is done by configuring the ", createVNode(_components.code, {
        children: "astro.config.mjs"
      }), " file[^4^]. Once you include\ndesired ", createVNode(_components.code, {
        children: "prefetch"
      }), " configurations in this file, the experimental Speculation\nRules API kicks in, preparing the page for quicker\u2014sometimes instant\u2014page\nloads[^2^]. Here\u2019s how to enable this in the Astro configuration:"]
    }), "\n", createVNode(_components.pre, {
      class: "shiki shaku material-theme-darker",
      style: {
        color: "#EEFFFF",
        backgroundColor: "#212121"
      },
      children: createVNode(_components.div, {
        class: "code-container",
        children: createVNode(_components.code, {
          children: [createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "{"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "prefetch"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "{"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "prefetchAll"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#FF9CAC"
              },
              children: "true"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "defaultStrategy"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "'"
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "viewport"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "'"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "experimental"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "{"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "clientPrerender"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#FF9CAC"
              },
              children: "true"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "prerendering-with-speculation-rules-api",
      children: "Prerendering with Speculation Rules API"
    }), "\n", createVNode(_components.p, {
      children: ["Prerendering is a technique used by browsers to load a document before it\u2019s\nneeded, such as while hovering over a link[^fn3]. The Speculation Rules API\nenhances this by allowing you to prefetch and ", createVNode(_components.strong, {
        children: "(most importantly)"
      }), ", prerender\nthe next page navigation", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn2",
          id: "user-content-fnref-fn2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". This results in basically instant page loads,\nleading to the sought-after \u201Cdesktop app\u201D-like user experience", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn2",
          id: "user-content-fnref-fn2-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["With the Speculation Rules API, speculation rules are taken in the form of a\nJSON structure that determines what resources should be prefetched or\nprerendered by the browser. So, developers the room to define rules by\nwhich certain URLs are dynamically prefetched or prerendered based on user\ninteraction", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn3",
          id: "user-content-fnref-fn3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), ". Here\u2019s an example of how the ", createVNode(_components.code, {
        children: "speculationrules"
      }), " attribute\nmight be used in a script tag:"]
    }), "\n", createVNode(_components.pre, {
      class: "shiki shaku material-theme-darker",
      style: {
        color: "#EEFFFF",
        backgroundColor: "#212121"
      },
      children: createVNode(_components.div, {
        class: "code-container",
        children: createVNode(_components.code, {
          children: [createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "speculationrules"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "{"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  \"prerender\": ["
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: '    {"source": "list", "urls": ["/about", "/contact", "/blog"]}'
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  ]"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "}"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\nHowever, no actual speculation is being done. One possible way to prerender\nthe \u201Cright\u201D pages, so as to not waste countless CPU cycles, is to load user\nfavorites, like favorite brands on an e-commerce, or their most frequently\naccessed pages."]
    }), "\n", createVNode(_components.pre, {
      class: "shiki shaku material-theme-darker",
      style: {
        color: "#EEFFFF",
        backgroundColor: "#212121"
      },
      children: createVNode(_components.div, {
        class: "code-container",
        children: createVNode(_components.code, {
          children: [createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "javascript"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  const session = Session.current()"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  const userFavorites = API.Brands.favorites({user}).sortBy((brandA) =>"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    brand.viewCount - brandB.viewCount"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  )"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "type"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "speculationrules"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  {"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    \"prerender\": ["
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: '      {"source": "list", "urls": userFavorites.slice(10)}'
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    ]"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  }"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "script"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\nNote that before implementing this, you should review the possible risks when\nprerendering on the client", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn1",
          id: "user-content-fnref-fn1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ". Debugging speculation rules can be tricky,\nparticularly for prerendered pages", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn2",
          id: "user-content-fnref-fn2-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". However, Chrome provides developer\ntools with the ", createVNode(_components.code, {
        children: "performance.getEntriesByType('navigation')[0].activationStart"
      }), "\nfunction that allows you to verify if a page was prerendered", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-fn3",
          id: "user-content-fnref-fn3-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "concluding-remarks",
      children: "Concluding Remarks"
    }), "\n", createVNode(_components.p, {
      children: "Let\u2019s make the web faster - try implementing Speculating Rules on your site\ntoday! If you haven\u2019t tried AstroJS yet, try that too!"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://developer.mozilla.org/docs/Web/API/Speculation_Rules_API",
        children: "Speculation Rules API - Web APIs"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://developer.chrome.com/blog/debugging-speculation-rules/",
        children: "Debugging speculation rules | Blog | Chrome for Developers"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://wordpress.org/plugins/speculation-rules/",
        children: "Speculation Rules \u2013 WordPress plugin | WordPress.org"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://developer.chrome.com/docs/web-platform/prerender-pages",
        children: "Prerender pages in Chrome for instant page navigations"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://docs.astro.build/en/reference/configuration-reference/",
        children: "Configuration Reference | Docs - Astro Documentation"
      })
    }), "\n", createVNode(_components.p, {
      children: ["[^fn16:\n", createVNode(_components.a, {
        href: "https://docs.astro.build/en/concepts/islands/",
        children: "Astro Islands"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "shiki shaku material-theme-darker",
      style: {
        color: "#EEFFFF",
        backgroundColor: "#212121"
      },
      children: createVNode(_components.div, {
        class: "code-container",
        children: createVNode(_components.code, {
          children: createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "undefined"
              }
            })
          })
        })
      })
    }), "\n", "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: ["Footnotes", createVNode(_components.a, {
          "aria-hidden": "true",
          tabindex: "-1",
          href: "#footnote-label",
          children: createVNode(_components.span, {
            class: "icon icon-link"
          })
        })]
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-fn2",
          children: ["\n", createVNode(_components.a, {
            href: "#user-content-fnref-fn2",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 1",
            class: "data-footnote-backref",
            children: "\u21A9"
          }), "\n \n", createVNode(_components.a, {
            href: "#user-content-fnref-fn2-2",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 1-2",
            class: "data-footnote-backref",
            children: ["\u21A9", createVNode(_components.sup, {
              children: "2"
            })]
          }), "\n \n", createVNode(_components.a, {
            href: "#user-content-fnref-fn2-3",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 1-3",
            class: "data-footnote-backref",
            children: ["\u21A9", createVNode(_components.sup, {
              children: "3"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-fn3",
          children: ["\n", createVNode(_components.a, {
            href: "#user-content-fnref-fn3",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 2",
            class: "data-footnote-backref",
            children: "\u21A9"
          }), "\n \n", createVNode(_components.a, {
            href: "#user-content-fnref-fn3-2",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 2-2",
            class: "data-footnote-backref",
            children: ["\u21A9", createVNode(_components.sup, {
              children: "2"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-fn1",
          children: ["\n", createVNode(_components.a, {
            href: "#user-content-fnref-fn1",
            "data-footnote-backref": "",
            "aria-label": "Back to reference 3",
            class: "data-footnote-backref",
            children: "\u21A9"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/speculation-rules-api.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/speculation-rules-api.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/speculation-rules-api.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
