import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_XjYta8gE.mjs';
import { c as $$Image } from './pages/about_LCjM6dYO.mjs';
import { Z as ZoomImage } from './prerender_DAgh2AX7.mjs';
import 'clsx';

const image1 = new Proxy({"src":"/_astro/neovim-spellfile.3R3kuJCs.png","width":3920,"height":1660,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/neovim-spellfile.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Neovim spellcheck - quick tips",
  "description": "How to fix those pesky spelling mistakes in Neovim, and add custom spelling suggestions.",
  "pubDate": "Jan 30 2024",
  "cover": "./assets/screenshots/neovim-spellfile.png",
  "coverAlt": "Neovim spellcheck",
  "tags": ["neovim", "quick tips"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "configuration",
    "text": "Configuration"
  }, {
    "depth": 2,
    "slug": "disabling-for-syntax",
    "text": "Disabling for syntax"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    div: "div",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["In neovim, when a word is marked as misspelled, you can add it to the dictionary\nby typing ", createVNode("kbd", {
        children: "zg"
      }), " while the cursor is on the word. To correct a word from a list of\nsuggestions, you can type ", createVNode("kbd", {
        children: "z="
      }), ". This is great, but what if you want to add a\ncustom spelling suggestion? For example, I want to add the word ", createVNode(_components.code, {
        children: "neovim"
      }), " to the\ndictionary, but I don\u2019t want to add it to the dictionary as ", createVNode(_components.code, {
        children: "neovim"
      }), ", I want to\nadd it as ", createVNode(_components.code, {
        children: "Neovim"
      }), ", with a capital ", createVNode(_components.code, {
        children: "N"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s how you do it:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Create a custom spelling suggestion file in your neovim configuration\ndirectory. I called mine ", createVNode(_components.code, {
            children: "~/.config/nvim/spell/sugg"
          }), ". You might notice files\nin that folder that end in ", createVNode(_components.code, {
            children: ".add"
          }), " \u2014 the words in these files are\nignored by spellcheck."]
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
                    color: "#EEFFFF"
                  },
                  children: "neovim"
                }), createVNode(_components.span, {
                  style: {
                    color: "#89DDFF"
                  },
                  children: "/"
                }), createVNode(_components.span, {
                  style: {
                    color: "#EEFFFF"
                  },
                  children: "Neovim"
                })]
              }), createVNode(_components.div, {
                class: "shaku-underline shaku-underline-solid",
                style: {
                  left: "0ch"
                },
                children: createVNode(_components.span, {
                  class: "shaku-underline-line",
                  style: {
                    left: "0ch"
                  },
                  children: "------"
                })
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["If ", createVNode(_components.code, {
            children: "Neovim"
          }), " is marked as a misspelled word, type ", createVNode("kbd", {
            children: "zg"
          }), " to add it to the\ndictionary.\n", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
            children: "Note"
          }), ": If the word to the right of the ", createVNode(_components.code, {
            children: "/"
          }), " is mispelled, the suggestion\nwill be ignored by neovim. Make sure all words on the right are added as\n\u201Cgoodwords\u201D."]
        }), "\n", createVNode(_components.p, {
          children: "The file should now look like this:"
        }), "\n", createVNode(ZoomImage, {
          link: image1.src,
          alt: "Full-size neovim screenshot",
          caption: "Neovim screenshot showing a custom spelling suggestion file",
          "client:load": true,
          "client:component-path": "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/ZoomImage.svelte",
          "client:component-export": "default",
          "client:component-hydration": true,
          children: createVNode($$Image, {
            src: image1,
            width: "720",
            alt: "Neovim screenshot showing a custom spelling suggestion file",
            class: "max-h-full max-w-full m-0"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Add the following to your vim options:"
        }), "\n"]
      }), "\n"]
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
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "vim."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "opt"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "sps"
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
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "file:/Users/aaron/.config/nvim/spell/sugg,best"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            })]
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now, when editing a file, if ", createVNode(_components.code, {
        children: "neovim"
      }), " is marked as a misspelled word, typing\n", createVNode("kbd", {
        children: "z="
      }), " will show ", createVNode(_components.code, {
        children: "Neovim"
      }), " as the first suggestion."]
    }), "\n", createVNode(_components.h2, {
      id: "disabling-for-syntax",
      children: "Disabling for syntax"
    }), "\n", createVNode(_components.p, {
      children: "Another thing to note is that there is a configuration option for spellchecking\nsyntax. Generally, we do not want to spell check function and class names, etc -\nthe whole page would start to turn red! To ignore certain syntax, add the\nfollowing to your vim options:"
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
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "vim."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "cmd"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "set spell syntax=off"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ")"
            })]
          })
        })
      })
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
const url = "src/content/blog/neovim-spellcheck.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/neovim-spellcheck.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/neovim-spellcheck.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
