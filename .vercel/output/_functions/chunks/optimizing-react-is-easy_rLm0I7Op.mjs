import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_XjYta8gE.mjs';
import { c as $$Image } from './pages/about_LWRLzwh0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Optimizing React is Easy",
  "description": "Follow one simple rule to know where to apply memoization, the single most important performance utility in React.",
  "pubDate": "Dec 19 2023",
  "cover": "./assets/bad-component.png",
  "coverAlt": "An example of a component that 'for sure' needs memoization.",
  "tags": ["react", "performance", "optimization"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    em: "em",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["React uses something called ", createVNode(_components.strong, {
        children: "shallow prop comparison"
      }), ". It\u2019s actually ", createVNode(_components.em, {
        children: "quite"
      }), " easy to understand and optimize, and\neveryone should be aware of this, for it is absolutely essential to react performance."]
    }), "\n", createVNode(_components.p, {
      children: ["So About those dependency arrays used as the 2nd argument in ", createVNode(_components.code, {
        children: "useMemo"
      }), ", ", createVNode(_components.code, {
        children: "useCallback"
      }), ", etc. \u2014 they are compared with their previous versions as follows:"]
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
                color: "#545454"
              },
              children: "// psuedo-code"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "propHasChanged"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "prev"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ")"
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
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "Object"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "is"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "prev"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "next"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
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
              left: "9ch"
            },
            children: [createVNode(_components.span, {
              class: "shaku-callout-arrow",
              style: {
                left: "2ch"
              }
            }), createVNode(_components.p, {
              children: "Object equality. Remember, {} !== {}."
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
      children: ["In other words, React compares old and new props by shallow equality; that is, it considers whether each ", createVNode(_components.em, {
        children: "new"
      }), " prop is ", createVNode(_components.strong, {
        children: "referentially equal"
      }), " to the ", createVNode(_components.em, {
        children: "old"
      }), " prop.\n", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\nThis means that if props or dependencies are ", createVNode(_components.em, {
        children: "not"
      }), " primitive values. that is, they are ", createVNode(_components.strong, {
        children: "arrays"
      }), ", ", createVNode(_components.strong, {
        children: "objects"
      }), ", or ", createVNode(_components.strong, {
        children: "functions"
      }), " (in Javascript, functions are objects too),\neven if they have the same value, each time the component is re-rendered, they will be considered unequal to their previous versions if they are not ", createVNode(_components.strong, {
        children: "memoized"
      }), ".\nTo avoid causing extra re-renders by having non-primitive props, ", createVNode(_components.a, {
        href: "https://react.dev/reference/react/memo#minimizing-props-changes",
        children: "simplify props or memoize props in the parent component"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Be careful of using objects in state, or as props, as they are not primitive values. If you need to use objects, make sure to memoize them using ", createVNode(_components.code, {
        children: "useMemo"
      }), " or ", createVNode(_components.code, {
        children: "useCallback"
      }), " as necessary."]
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
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "MyFC"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "({"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "obj"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}):"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "React"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "FC"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<{"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "obj"
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
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "a"
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
                color: "#FFCB6B"
              },
              children: "number"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "b"
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
                color: "#FFCB6B"
              },
              children: "number"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}>"
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
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
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
                color: "#C792EA"
              },
              children: "const"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "myState"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "useState"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "{"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "a"
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
                color: "#F78C6C"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " b"
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
                color: "#F78C6C"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: ")"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ";"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#C792EA"
              },
              children: "let"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "y"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#F78C6C"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ";"
            })]
          }), createVNode(_components.div, {
            class: "line"
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
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " ("
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "    <"
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "MyComponent"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "obj"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "myState"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "/>"
            })]
          }), createVNode(_components.div, {
            class: "shaku-callout",
            style: {
              left: "16ch"
            },
            children: [createVNode(_components.span, {
              class: "shaku-callout-arrow",
              style: {
                left: "11ch"
              }
            }), createVNode(_components.p, {
              children: "myState causes re-renders"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "      <"
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "div"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: ">"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "        "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "Subcomponent"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "val"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "={"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "obj"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "}"
            }), createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "/>"
            })]
          }), createVNode(_components.div, {
            class: "shaku-callout",
            style: {
              left: "9ch"
            },
            children: [createVNode(_components.span, {
              class: "shaku-callout-arrow",
              style: {
                left: "19ch"
              }
            }), createVNode(_components.p, {
              children: "so does an object from props"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F07178"
              },
              children: "      "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "div"
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
                color: "#F07178"
              },
              children: "    "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "div"
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
                color: "#F07178"
              },
              children: "  )"
            })
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
      children: ["When you use ", createVNode(_components.code, {
        children: "useMemo"
      }), ", your component re-renders whenever any element of the dependency array is not shallowly equal to its previous value.\nThis means that React compares every prop in your component with its previous value using the Object.is comparison."]
    }), "\n", createVNode(_components.p, {
      children: ["Therefore, all dependencies and props should be ", createVNode(_components.strong, {
        children: "PRIMITIVE VALUES"
      }), "!\n", createVNode(_components.br, {}), "\nFor example, ", createVNode(_components.code, {
        children: "Object.is(3, 3)"
      }), " is ", createVNode(_components.code, {
        children: "true"
      }), ", but ", createVNode(_components.code, {
        children: "Object.is({}, {})"
      }), " is ", createVNode(_components.code, {
        children: "false"
      }), "."]
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
const url = "src/content/autoFormatTest/optimizing-react-is-easy.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/autoFormatTest/optimizing-react-is-easy.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/autoFormatTest/optimizing-react-is-easy.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
