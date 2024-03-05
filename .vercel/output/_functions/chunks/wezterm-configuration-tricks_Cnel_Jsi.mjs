import { $ as __astro_tag_component__, F as Fragment, _ as createVNode } from './astro_XjYta8gE.mjs';
import { c as $$Image } from './pages/about_LWRLzwh0.mjs';
import 'clsx';

const wezVideo2 = "/_astro/wezterm2.ix0s5psb.webm";

const frontmatter = {
  "title": "Wezterm workspace switcher API",
  "description": "How to make keybindings for a preset list of workspaces, and generate and switch to new workspaces on the fly.",
  "pubDate": "Feb 2, 2024",
  "cover": "./assets/wezterm.png",
  "coverAlt": "Wezterm configuration file with workspaces switcher keybindings.",
  "tags": ["wezterm", "terminal", "productivity"],
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    div: "div",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["You can do some pretty cool stuff with the Wezterm API. Here is an example to get you started.\nHere, we are defining a list of workspaces that the user can switch to. Using ", createVNode(_components.code, {
        children: "InputSelector"
      }), ", the user is then prompted to select a workspace\nfrom the list, causing the terminal to switch to that workspace upon selection.\nA really cool thing to not about workspaces is that each workspace has its own\nset of tabs."]
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
              children: "Here we use the "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "`"
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "InputSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "` "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "action to create a list of workspaces that"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "wezter at at will use "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "`"
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "to prompt the user to select from a list of items."
            })]
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "```"
            }), createVNode(_components.span, {
              style: {
                color: "#C3E88D"
              },
              children: "lua"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "{"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "	mods "
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
              children: "LEADER"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
              children: "	key "
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
              children: "1"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
              children: "	action "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "action_callback"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "window"
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
              children: "pane"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ")"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "		"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- Here you can dynamically construct a longer list if needed"
            })]
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "local"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " home "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "home_dir"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "local"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " workspaces "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " {"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			{ id "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " home, label "
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
              children: "Home"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			{ id "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " home "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
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
              children: "/Code"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ", label "
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
              children: "Work"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			{ id "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " home "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
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
              children: "/Documents"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ", label "
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
              children: "Personal"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			{ id "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " home "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
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
              children: "/.config"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ", label "
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
              children: "Config"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		}"
            })
          }), createVNode(_components.div, {
            class: "line"
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		"
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "window"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "perform_action"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			a."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "InputSelector"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "({"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				action "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "action_callback"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "inner_window"
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
              children: "inner_pane"
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
              children: "id"
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
              children: "label"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ")"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "if"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "not"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " id "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "and"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "not"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " label "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "then"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "log_info"
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
              children: "cancelled"
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
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "else"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "log_info"
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
              children: "id = "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " id)"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "log_info"
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
              children: "label = "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " label)"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						"
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "inner_window"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "perform_action"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							a."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "SwitchToWorkspace"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "({"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "								name "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " label,"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "								spawn "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " {"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "									label "
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
              children: "Workspace: "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ".."
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " label,"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "									cwd "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " id,"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "								},"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							}),"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							inner_pane"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						)"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "),"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				title "
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
              children: "Choose Workspace"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
              children: "				choices "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " workspaces,"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				fuzzy "
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
              children: "true"
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
                color: "#89DDFF"
              },
              children: "				"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- Nightly version only: https://wezfurlong.org/wezterm/config/lua/keyassignment/InputSelector.html?h=input+selector#:~:text=These%20additional%20fields%20are%20also%20available%3A"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "				"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- fuzzy_description = \"Fuzzy find and/or make a workspace\","
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			}),"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			pane"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		)"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "	"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "),"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })
          })]
        })
      })
    }), "\n", createVNode("video", {
      src: wezVideo2,
      autoplay: true,
      loop: true,
      controls: true
    }), "\n", createVNode(_components.p, {
      children: "Want to make new workspaces on the fly? Try this:"
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
                color: "#EEFFFF"
              },
              children: "{"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			key "
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
              children: "N"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
              children: "			mods "
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
              children: "CTRL|SHIFT"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\""
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
              children: "			action "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " a."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "PromptInputLine"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "({"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				description "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "format"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "({"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					{ Attribute "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " { Intensity "
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
              children: "Bold"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "} },"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					{ Foreground "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " { AnsiColor "
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
              children: "Fuchsia"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "} },"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					{ Text "
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
              children: "Enter name for new workspace"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "\" "
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "},"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				}),"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				action "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " wezterm."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "action_callback"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "function"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "window"
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
              children: "pane"
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
              children: "line"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: ")"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- line will be `nil` if they hit escape without entering anything"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- An empty string if they just hit enter"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#545454"
              },
              children: "-- Or the actual line of text they wrote"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "if"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " line "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "then"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						"
            }), createVNode(_components.span, {
              style: {
                color: "#FFCB6B"
              },
              children: "window"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: ":"
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "perform_action"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "("
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							a."
            }), createVNode(_components.span, {
              style: {
                color: "#82AAFF"
              },
              children: "SwitchToWorkspace"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "({"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "								name "
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: " line,"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							}),"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "							pane"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "						)"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "					"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "				"
            }), createVNode(_components.span, {
              style: {
                color: "#89DDFF"
              },
              children: "end"
            }), createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "),"
            })]
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "			}),"
            })
          }), createVNode(_components.div, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#EEFFFF"
              },
              children: "		}"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.br, {}), "\nNow, you can easily toggle between 2 folders. While you may already be\nusing tabs for this, using Wezterm workspaces can be more efficient when\nextensively and cleverly scripted."]
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
const url = "src/content/blog/wezterm-configuration-tricks.mdx";
const file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/wezterm-configuration-tricks.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/wezterm-configuration-tricks.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
