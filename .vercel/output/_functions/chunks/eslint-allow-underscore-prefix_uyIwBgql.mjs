import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_XjYta8gE.mjs';
import { c as $$Image } from './pages/about_zb74jL4I.mjs';
import './prerender_o2mxX9cc.mjs';
/* empty css                                                           */
import 'clsx';

new Proxy({"src":"/_astro/nvim-no-unused-vars2.E1ttED_E.png","width":5120,"height":2880,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/nvim-no-unused-vars2.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "ESLint - Ignore underscore-prefixed variables for `eslint-disable-unused-vars` rule",
  "description": "Keep using `eslint-disable-unused-vars` by setting up a rule to ignore underscore-prefixed variables.",
  "pubDate": "Jan 15 2024",
  "cover": "./assets/screenshots/nvim-no-unused-vars.png",
  "coverAlt": "Neovim screenshot showing eslint unused vars error",
  "tags": ["eslint", "react", "typescript", "javascript"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-steps",
    "text": "The Steps"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    div: "div",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Ever encounter this error?"
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
                color: "#FFCB6B"
              },
              children: "\"eslint: '\\_myVar' is assigned a value but never used\""
            })
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Ideally the ", createVNode(_components.code, {
        children: "@typescript-eslint/no-unused-vars"
      }), " rule can be left enabled\nand specific variables can be ignored when prefixed with an underscore ", createVNode(_components.code, {
        children: "_"
      }), ". You\ncan do exactly this in a few simple steps."]
    }), "\n", createVNode(_components.h2, {
      id: "the-steps",
      children: "The Steps"
    }), "\n", createVNode(_components.p, {
      children: ["First, update your ", createVNode(_components.code, {
        children: ".eslintrc.json"
      }), " as follows:"]
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
                color: "#EEFFFF"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "eslintConfig"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
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
                color: "#EEFFFF"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "rules"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
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
                color: "#EEFFFF"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#F78C6C"
              },
              children: "no-unused-vars"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "off"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
                color: "#EEFFFF"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#F78C6C"
              },
              children: "@typescript-eslint/no-unused-vars"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "["
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "        "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "warn"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
                color: "#EEFFFF"
              },
              children: "        "
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
                color: "#EEFFFF"
              },
              children: "          "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "argsIgnorePattern"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "^_"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
                color: "#EEFFFF"
              },
              children: "          "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "varsIgnorePattern"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "^_"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
                color: "#EEFFFF"
              },
              children: "          "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "caughtErrorsIgnorePattern"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "^_"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "        "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "]"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
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
    }), "\n", createVNode(_components.p, {
      children: ["This allows you to prefix any variable with ", createVNode(_components.code, {
        children: "_"
      }), " to be ignored by ", createVNode(_components.code, {
        children: "ESLint"
      }), ",\nincluding those in destructuring assignments."]
    }), "\n", createVNode(_components.p, {
      children: ["After updating the ", createVNode(_components.code, {
        children: ".eslintrc.json"
      }), " as follows, I could then prefix any\nvariable with an underscore to have it be ignored by ", createVNode(_components.code, {
        children: "ESLint"
      }), ":"]
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
                color: "#C792EA"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "["
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "_isZoomVisible"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " setZoomVisible"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "]"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "useState"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#FF9CAC"
              },
              children: "false"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ")"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ";"
            })]
          }), createVNode(_components.div, {
            class: "shaku-callout",
            style: {
              left: "7ch"
            },
            children: [createVNode(_components.span, {
              class: "shaku-callout-arrow",
              style: {
                left: "1ch"
              }
            }), createVNode(_components.p, {
              children: "added underscore to variable name."
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["After updating the ", createVNode(_components.code, {
        children: "eslintConfig"
      }), ", the error is now gone and ESLint doesn\u2019t\ncomplain about the unused variables."]
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
const url = "src/content/blog/eslint-allow-underscore-prefix.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/eslint-allow-underscore-prefix.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/eslint-allow-underscore-prefix.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
