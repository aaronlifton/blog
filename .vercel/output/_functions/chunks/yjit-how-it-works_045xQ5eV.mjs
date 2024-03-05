import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_V9-A_eD8.mjs';
import { c as $$Image } from './pages/about_Toot-axz.mjs';
import 'clsx';

new Proxy({"src":"/_astro/yjit.u3rZapDH.png","width":768,"height":663,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/yjit-how-it-works/yjit.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Ruby now produces machine code on-the-fly",
  "description": "A primer on how YJIT Ruby's new JIT compiler works, as well as a deep dive into improvements to the Ruby GC and memory layout.",
  "pubDate": "Feb 5, 2024",
  "cover": "../assets/yjit-discourse.png",
  "coverAlt": "An example of very popular sites switching their app entirely over to the new YJIT Ruby.",
  "tags": ["ruby", "rails", "performance", "compilers"],
  "draft": false,
  "slug": "ruby-now-produces-machine-code-on-the-fly"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "ruby-now-produces-machine-code-on-the-fly",
    "text": "Ruby now produces machine code on-the-fly"
  }, {
    "depth": 2,
    "slug": "understanding-yjit-in-ruby",
    "text": "Understanding YJIT in Ruby"
  }, {
    "depth": 2,
    "slug": "basic-block-versioning-bbv-and-yjit",
    "text": "Basic Block Versioning (BBV) and YJIT"
  }, {
    "depth": 2,
    "slug": "shopifys-influential-contributions",
    "text": "Shopify\u2019s Influential Contributions"
  }, {
    "depth": 2,
    "slug": "embracing-the-future-with-yjit",
    "text": "Embracing the Future with YJIT"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Generate a blog post discussing how YJIT ruby works, what BBV (Basic block versioning) is, and how it relates to YJIT. Also discuss how shopify has contributed object shapes to ruby\u2019s internal object representation. Finally, discuss how shopify has contributed to Ruby\u2019s garbage compiler. All of these contributions have greatly increased the robustness of Ruby. The audience of the blog post is other Ruby on Rails developers that aren\u2019t familiar with how JIT compilers work."
    }), "\n", createVNode(_components.h1, {
      id: "ruby-now-produces-machine-code-on-the-fly",
      children: "Ruby now produces machine code on-the-fly"
    }), "\n", createVNode(_components.p, {
      children: "This is also known as a JIT compiler."
    }), "\n", createVNode(_components.p, {
      children: "In the spectrum of software technologies, Just-In-Time (JIT) compilers have emerged as invaluable tools that effectively optimize runtime performance. Ruby, a dynamic, interpretative language, has certainly benefited from JIT architectures. Notably, YJIT, an optimizing JIT compiler built inside CRuby (now built with Rust), has been pivotal in enhancing Ruby\u2019s robustness and performance. If you\u2019re a Ruby on Rails developer interested in JIT compilers but unfamiliar with their workings, you\u2019ve come to the right place."
    }), "\n", createVNode(_components.h2, {
      id: "understanding-yjit-in-ruby",
      children: "Understanding YJIT in Ruby"
    }), "\n", createVNode(_components.p, {
      children: ["Incorporated officially as part of Ruby 3.1 and 3.2, YJIT has immeasurably improved Ruby\u2019s speed, making it 57% faster (", createVNode(_components.a, {
        href: "https://shopify.engineering/ruby-yjit-is-production-ready",
        children: "source"
      }), "). Its lightweight nature and minimalistic design provide a great deal of value with less memory usage (although that is its biggest weakness [3]), increasing the language\u2019s overall efficiency."]
    }), "\n", createVNode(_components.p, {
      children: ["YJIT operates on a Basic Block Versioning (BBV) approach, a JIT architecture that lazily compiles code (", createVNode(_components.a, {
        href: "https://docs.ruby-lang.org/en/master/yjit/yjit_md.html",
        children: "source"
      }), "). But, what does lazy compilation or BBV mean? Let\u2019s delve into that."]
    }), "\n", createVNode(_components.p, {
      children: ["Basic Block Versioning (BBV) is a strategy used in Just-In-Time (JIT) compilers, including those for Ruby, to achieve high-performance machine code generation. BBV takes advantage of dynamic programming language features by generating type-specialized machine code on-the-fly, without undergoing separate type analysis or speculative optimization phases. This capability avoids both the precision limitations of traditional type analysis and the complexity associated with speculative optimization techniques ", createVNode(_components.a, {
        href: "https://arxiv.org/pdf/1507.02437.pdf",
        children: "source"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Lazy Basic Block Versioning (LBBV), an application of BBV, allows the execution of the program itself to dictate the generation of type-specialized code ", createVNode(_components.a, {
        href: "https://arxiv.org/pdf/1411.0352v1",
        children: "source"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "To illustrate, consider a code block in Ruby where a variable \u2018num\u2019 might be an integer or a floating-point number:"
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
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "def"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "calculate"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "num"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ")"
            })]
          }), createVNode(_components.div, {
            class: "line"
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
              children: "return"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " num "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "*"
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
            })]
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            })
          }), createVNode(_components.div, {
            class: "line"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "During execution, the JIT compiler would create two versions of this basic code block. First, if \u2018num\u2019 is an integer during a particular execution, the compiler generates and caches a version optimized for handling integers. Second, if \u2018num\u2019 is a floating-point number in another execution, the compiler produces a separate version optimized for floating-point computations. Therefore, depending on the type of \u2018num\u2019, the JIT compiler selects the matching optimized block for execution."
    }), "\n", createVNode(_components.p, {
      children: ["This way, BBV delivers optimized performance since the JIT compiler generates and uses machine code customized for specific data types based on actual execution patterns, rather than making assumptions or using overly generalized code ", createVNode(_components.a, {
        href: "https://www-labs.iro.umontreal.ca/~feeley/papers/SaleilFeeleyVMIL18.pdf",
        children: "source"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "basic-block-versioning-bbv-and-yjit",
      children: "Basic Block Versioning (BBV) and YJIT"
    }), "\n", createVNode(_components.p, {
      children: "BBV in YJIT plays a crucial role in enhancing Ruby\u2019s performance. In essence, a basic block is a sequence of instructions with a single entry and exit points. \u201CVersioning\u201D of these blocks allows YJIT to accumulate and propagate type information, which is vital for optimizing dynamically-typed languages like Ruby. The versions of a basic block accommodate different execution paths and scenarios, resulting in highly flexible and efficient code execution."
    }), "\n", createVNode(_components.h2, {
      id: "shopifys-influential-contributions",
      children: "Shopify\u2019s Influential Contributions"
    }), "\n", createVNode(_components.p, {
      children: ["Shopify, a major player in the Ruby community, has been influential in augmenting Ruby\u2019s internal object representation. Shopify\u2019s contributions to \u201Cobject shapes\u201D, which capture the layout of an object\u2019s attributes and types, have been pertinent in enhancing Ruby\u2019s efficiency. Shopify\u2019s insights into leveraging object shapes have provided a framework for improving the performance of object-oriented programming in Ruby (", createVNode(_components.a, {
        href: "https://rubykaigi.org/2021-takeout/data/slides/Maxime-YJIT-RubyKaigi-2021-slides.pdf",
        children: "source"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["Furthermore, Shopify has significantly contributed to Ruby\u2019s garbage compiler. Although the granular specifics of these modifications aren\u2019t readily available, the collective endeavor of these contributions has been shown to enhance Ruby\u2019s robustness, making YJIT even more viable for real-world production deployments (", createVNode(_components.a, {
        href: "https://rubykaigi.org/2023/presentations/maximecb.html",
        children: "source"
      }), ")."]
    }), "\n", createVNode(_components.h2, {
      id: "embracing-the-future-with-yjit",
      children: "Embracing the Future with YJIT"
    }), "\n", createVNode(_components.p, {
      children: "In a nutshell, YJIT and the underlying BBV concept, combined with Shopify\u2019s pivotal contributions, have played vital roles in improving Ruby\u2019s robustness and performance. This intricate interplay of architectures, techniques, and contributions, although technical in nature, holds practical implications for us, the developers. As we continue to improve our code and optimize our applications, understanding these underlying principles better equips us for the journey. With firms like Shopify actively pushing boundaries, we can look forward to further exciting enhancements in Ruby\u2019s future."
    }), "\n", createVNode(_components.p, {
      children: "References:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://shopify.engineering/ruby-yjit-is-production-ready",
            children: "Shopify Engineering"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://docs.ruby-lang.org/en/master/yjit/yjit_md.html",
            children: "Ruby Official Documentation"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://github.com/Shopify/yjit",
            children: "Shopify YJIT GitHub Repo"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://rubykaigi.org/2021-takeout/data/slides/Maxime-YJIT-RubyKaigi-2021-slides.pdf",
            children: "RubyKaigi 2021"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://rubykaigi.org/2023/presentations/maximecb.html",
            children: "RubyKaigi 2023"
          })
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
const url = "src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
