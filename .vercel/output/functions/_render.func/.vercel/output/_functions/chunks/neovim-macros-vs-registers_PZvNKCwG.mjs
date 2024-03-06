import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_XjYta8gE.mjs';
import { c as $$Image } from './pages/about_vGYAYBdP.mjs';
import './prerender_h69MxTug.mjs';
import 'clsx';

const macroVideo = "/_astro/macro.WjM4jdek.webm";

const macroVideo2 = "/_astro/macro2.RLtRpTk4.webm";

const globalVideo = "/_astro/global1.PgAoqguO.webm";

const frontmatter = {
  "title": "Neovim macros vs normal mode",
  "description": "A discussion on the benefits of using normal mode commands versus macros in Neovim.",
  "pubDate": "Dec 19 2023",
  "cover": "./assets/macros.png",
  "coverAlt": "Telescope macro extension",
  "tags": ["neovim", "quick tips"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-normal-mode",
    "text": "Why normal mode"
  }, {
    "depth": 2,
    "slug": "global-commands",
    "text": "Global commands"
  }, {
    "depth": 2,
    "slug": "another-example",
    "text": "Another example"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    div: "div",
    em: "em",
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
    children: [createVNode("video", {
      controls: "",
      autoplay: "",
      loop: "true",
      children: createVNode("source", {
        src: macroVideo,
        type: "video/webm"
      })
    }), "\n", createVNode(_components.p, {
      children: ["In Neovim, which is better, ", createVNode(_components.strong, {
        children: "macros"
      }), " or ", createVNode(_components.strong, {
        children: "normal"
      }), " mode? You may be surprised\nat the power of normal mode, and the ", createVNode(_components.strong, {
        children: "execute"
      }), " command, compared to\nmanaging macros with plugins."]
    }), "\n", createVNode(_components.p, {
      children: ["One question you might ask is, if normal mode can perform the same job as macros, then in which cases would you use\nmacros? Probably when you use them regularly and in different projects. However, you can do this with ", createVNode(_components.code, {
        children: "execute \"norm\""
      }), " commands too, by saving them as keybindings."]
    }), "\n", createVNode(_components.h2, {
      id: "why-normal-mode",
      children: "Why normal mode"
    }), "\n", createVNode(_components.p, {
      children: "When using normal mode, You get to practice writing normal commands live, while looking at the code, rather than\ntry to decipher a dense string of characters that doesn\u2019t make sense in an\neditable list format, without the original context. I would say it\u2019s better to get good at vim motions and be\nprepared to write them at-will rather than spend time writing and organizing\nmacros. Yes, there are macro plugins that help you organize them, but I found\nthat editing and remembering which macro was which, was quite cumbersome."
    }), "\n", createVNode(_components.p, {
      children: ["You should note that regardless of how you are recording your commands, is that it\u2019s better to use ", createVNode("kbd", {
        children: "fFtT"
      }), " and ", createVNode("kbd", {
        children: "hjkl"
      }), " than ", createVNode("kbd", {
        children: "wb"
      }), ", since targeting the beginning\nof a word is way more recognizable in command form than contextual word navigation. For example, no on wants to see a macro with ", createVNode(_components.code, {
        children: "hhhhhjjkkkjdw"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "global-commands",
      children: "Global commands"
    }), "\n", createVNode(_components.p, {
      children: ["One cool trick is to use a ", createVNode(_components.code, {
        children: "g"
      }), " ", createVNode(_components.em, {
        children: "(global)"
      }), " command to make a change to every location of a word in a file.\nFor example, what if we wanted to use a normal command to ugprade the syntax of an older javascrirpt file?\nWe would execute the following command:"]
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
              },
              children: ':g :g/function /execute "norm cwconst^[f(i = \x1Bf{i=> \x1B"'
            })
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Executing ", createVNode(_components.code, {
        children: ':g /function /execute "norm cwconst^[f(i = ^[f{i=> ^["'
      }), " will change the function syntax to arrow function syntax for all instances of the word ", createVNode(_components.code, {
        children: "function"
      }), ".\nNote that the ", createVNode(_components.code, {
        children: "^]"
      }), " symbols are special - they were inserted via ", createVNode("kbd", {
        children: "Ctrl-V"
      }), " and then ", createVNode("kbd", {
        children: "Esc"
      }), ". Note they are purple in the command box. If ", createVNode(_components.code, {
        children: "^] is not colored differently"
      }), ", than it will not work as the special escape syntax."]
    }), "\n", createVNode("video", {
      controls: "",
      autoplay: "",
      loop: "true",
      children: createVNode("source", {
        src: macroVideo2,
        type: "video/webm"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Another trick is the ", createVNode(_components.code, {
        children: ":g/found/v/notfound/{cmd}"
      }), " syntax \u2014 in this\nexample, a command is being run on lines that contain ", createVNode(_components.code, {
        children: "function"
      }), ", but ", createVNode(_components.em, {
        children: "do not"
      }), "\ncontain ", createVNode(_components.code, {
        children: "test"
      }), ". This a potentially way to delete all your code but keep your\ntest! Seriously, don\u2019t try this at home."]
    }), "\n", createVNode("video", {
      controls: "",
      autoplay: "",
      loop: "true",
      children: createVNode("source", {
        src: globalVideo,
        type: "video/webm"
      })
    }), "\n", createVNode(_components.p, {
      children: "\\"
    }), "\n", createVNode(_components.p, {
      children: ["I also found that recording macros often requires multiple tries, which distracts you from whatever you\u2019re working on.\nYou won\u2019t be able to immediately use the macro, since you will have to go back and edit it.\nIt\u2019s better to just write the normal mode command and use it immediately.\nThen type\xA0", createVNode(_components.code, {
        children: "let @q='<C-R>q'"
      }), "\xA0and then edit the macro inside the quotes. I think it\u2019s better than polluting your buffers."]
    }), "\n", createVNode(_components.p, {
      children: "Additionally, I had made several enjoyable macros, but forgot what they do and well, deciphering letters\ntakes more time than to just not use the macro."
    }), "\n", createVNode(_components.h2, {
      id: "another-example",
      children: "Another example"
    }), "\n", createVNode(_components.p, {
      children: ["In my [Wezterm] config, I wanted to see if I could replace\nall instead of ", createVNode(_components.code, {
        children: "a.[Wezterm method]"
      }), " with ", createVNode(_components.code, {
        children: "act.[Wezterm method]"
      }), ", where a Wezterm\nmethod is a command available in the wezterm action API, like\n", createVNode(_components.code, {
        children: "wezterm.action.SendKey"
      }), " or ", createVNode(_components.code, {
        children: "wezterm.action.SplitHorizontal"
      }), ". I could have used\nfind and replace with a regex string, like ", createVNode(_components.code, {
        children: "%s/act.[A-Z+]/a.[A-Z+]/g"
      }), ", but to\nhelp solve the normal mode debate, I tried doing this with a normal mode\ncommand."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["First, I set the \u201Cfind\u201D register (", createVNode(_components.code, {
            children: "@\\"
          }), ") to my search string:"]
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
                  },
                  children: " \\ a.[A-Z*]"
                })
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Then I ran this command:"
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
                  },
                  children: ":171,$norm nlact^[\""
                })
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Result: ", createVNode(_components.code, {
            children: "a.AdjustPanelSize"
          }), " and ", createVNode(_components.code, {
            children: "a.ActivePaneDirection"
          }), " have been\nupdated to have a prefix of ", createVNode(_components.code, {
            children: "act."
          }), " instead of ", createVNode(_components.code, {
            children: "a."
          }), ", as well as any other\nmethods that started with ", createVNode(_components.code, {
            children: "act."
          }), ". Now, the variable ", createVNode(_components.code, {
            children: "a"
          }), " can be deleted."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["However, it is not easy to deal with the escape characters, and the command is\nnot very readable. A better solution is to use the ", createVNode(_components.code, {
        children: "execute"
      }), " command:"]
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
              },
              children: "execute \"159,165norm 0fc2dw\""
            })
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["This command means, if the cursor was directly below the ", createVNode(_components.code, {
        children: "*"
      }), " character below, running ", createVNode(_components.code, {
        children: ":execute \"2,4norm fc2dw\""
      }), " would move the cursor to the ", createVNode(_components.code, {
        children: "c"
      }), " in ", createVNode(_components.code, {
        children: "config"
      }), " on line 2, and delete the word\n", createVNode(_components.code, {
        children: "config"
      }), " on lines 2, 3, and 4."]
    }), "\n", createVNode(_components.p, {
      children: "In other words, it would change this:"
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
              children: "  "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "*"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " config."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "a"
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
                color: "#F78C6C"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ","
            })]
          }), createVNode(_components.div, {
            class: "shaku-callout",
            style: {
              left: "3ch"
            },
            children: [createVNode(_components.span, {
              class: "shaku-callout-arrow",
              style: {
                left: "0ch"
              }
            }), createVNode(_components.p, {
              children: "cursor should be here"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    config."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "b"
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
                color: "#F78C6C"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ","
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "    config."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "c"
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
                color: "#F78C6C"
              },
              children: "3"
            })]
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "into this:"
      })
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
              children: "{a "
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
                color: "#F78C6C"
              },
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ",b "
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
                color: "#F78C6C"
              },
              children: "2"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ",c "
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
                color: "#F78C6C"
              },
              children: "3"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "}"
            })]
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\nIn Neovim, macros are stored as their actual commands, and in order to add a\ndescription to them, a plugin is needed. This turned out to be more tricky than\nI had expected, as this is a case when the most popular plugins on Github are\nactually not to be recommended. The first result, ", createVNode(_components.a, {
        href: "https://github.com/ecthelionvi/NeoComposer.nvim",
        children: "NeoComposer"
      }), ",\nmade little sense to use unless you always kept your macro list to at most 7 macros and you are able to easily decipher all of them.\n(macros are displayed as virtual text and you can \u201Cscroll\u201D through the macros\nvia ", createVNode("kbd", {
        children: "C-n"
      }), " and ", createVNode("kbd", {
        children: "C-p"
      }), "."]
    }), "\n", createVNode("video", {
      controls: "",
      autoplay: "",
      loop: "true",
      children: createVNode("source", {
        src: macroVideo,
        type: "video/webm"
      })
    }), "\n", createVNode(_components.p, {
      children: ["I considered forking the project but I knew my macro collection would be big\nenough to require searching. The next most popular plugin was ", createVNode(_components.a, {
        href: "https://github.com/svermeulen/vim-macrobatics",
        children: "Macrobatics"
      }), ",\nwhich looked to be exactly what I wanted, but I had this need for everything to be\nusing the Neovim Lua API, and not direct vim commands, and actually the plugin\njust did not work on my machine, so I searched Github until i found one that\nactually worked well \u2014 ", createVNode(_components.a, {
        href: "https://github.com",
        children: "telescope-macros"
      }), ". Adding a\ntelescope finder is a clever and simple solution and I applaud the author", createVNode(_components.br, {}), "\nan editable list is the only thing needed to manage a macro library."]
    }), "\n", createVNode(_components.p, {
      children: ["If I have a macro assigned to the ", createVNode(_components.code, {
        children: "@l"
      }), " register, using ", createVNode(_components.code, {
        children: "telescope-macros"
      }), ", I\ncan apply it repeatedly via ", createVNode("kbd", {
        children: "leader->ml"
      }), ": ", createVNode("kbd", {
        children: "leader->m"
      }), " opens the telescope\nmacros list, ", createVNode(_components.code, {
        children: "l"
      }), " finds the macro under the ", createVNode(_components.code, {
        children: "@l"
      }), " register, and ", createVNode(_components.code, {
        children: "<cr>"
      }), " closes the\nwindow and applies the macro."]
    }), "\n", createVNode(_components.p, {
      children: ["I felt some modifications were essential to make \u2014 for instance, adding a key\nbinding to [[\u2606 Telescope keymap]] that would close the modal and navigate to\nthe previewed file. Why isn\u2019t that part of telescope by default? I searched for\nexamples and found none other than [[ThePrimeagen]]\u2018s telescope\nmodifications, and I took his ", createVNode(_components.code, {
        children: "get_preview"
      }), " function, which would open the\nbuffer from the preview window in the editor."]
    }), "\n", createVNode(_components.p, {
      children: "However, his function didn\u2019t work and I punted on the idea after trying and\nfailing to get AI to help. Later on, I actually found Google Duet to be the most\nproficient as writing Neovim functions."
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
const url = "src/content/blog/neovim-macros-vs-registers.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/neovim-macros-vs-registers.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/neovim-macros-vs-registers.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
