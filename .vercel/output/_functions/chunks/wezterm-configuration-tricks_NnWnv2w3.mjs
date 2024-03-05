const id = "wezterm-configuration-tricks.mdx";
						const collection = "blog";
						const slug = "wezterm-configuration-tricks";
						const body = "import wezVideo2 from \"./assets/videos/wezterm2.webm\"\n\nYou can do some pretty cool stuff with the Wezterm API. Here is an example to get you started.\nHere, we are defining a list of workspaces that the user can switch to. Using `InputSelector`, the user is then prompted to select a workspace \nfrom the list, causing the terminal to switch to that workspace upon selection.\nA really cool thing to not about workspaces is that each workspace has its own\nset of tabs.\n```lua\nHere we use the `InputSelector` action to create a list of workspaces that\nwezter at at will use `to prompt the user to select from a list of items.\n\n```lua\n{\n\tmods = \"LEADER\",\n\tkey = \"1\",\n\taction = wezterm.action_callback(function(window, pane)\n\t\t-- Here you can dynamically construct a longer list if needed\n\n\t\tlocal home = wezterm.home_dir\n\t\tlocal workspaces = {\n\t\t\t{ id = home, label = \"Home\" },\n\t\t\t{ id = home .. \"/Code\", label = \"Work\" },\n\t\t\t{ id = home .. \"/Documents\", label = \"Personal\" },\n\t\t\t{ id = home .. \"/.config\", label = \"Config\" },\n\t\t}\n\n\t\twindow:perform_action(\n\t\t\ta.InputSelector({\n\t\t\t\taction = wezterm.action_callback(function(inner_window, inner_pane, id, label)\n\t\t\t\t\tif not id and not label then\n\t\t\t\t\t\twezterm.log_info(\"cancelled\")\n\t\t\t\t\telse\n\t\t\t\t\t\twezterm.log_info(\"id = \" .. id)\n\t\t\t\t\t\twezterm.log_info(\"label = \" .. label)\n\t\t\t\t\t\tinner_window:perform_action(\n\t\t\t\t\t\t\ta.SwitchToWorkspace({\n\t\t\t\t\t\t\t\tname = label,\n\t\t\t\t\t\t\t\tspawn = {\n\t\t\t\t\t\t\t\t\tlabel = \"Workspace: \" .. label,\n\t\t\t\t\t\t\t\t\tcwd = id,\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\tinner_pane\n\t\t\t\t\t\t)\n\t\t\t\t\tend\n\t\t\t\tend),\n\t\t\t\ttitle = \"Choose Workspace\",\n\t\t\t\tchoices = workspaces,\n\t\t\t\tfuzzy = true,\n\t\t\t\t-- Nightly version only: https://wezfurlong.org/wezterm/config/lua/keyassignment/InputSelector.html?h=input+selector#:~:text=These%20additional%20fields%20are%20also%20available%3A\n\t\t\t\t-- fuzzy_description = \"Fuzzy find and/or make a workspace\",\n\t\t\t}),\n\t\t\tpane\n\t\t)\n\tend),\n},\n```\n\n<video src={wezVideo2} autoplay loop controls />\n\nWant to make new workspaces on the fly? Try this:\n```lua\n{\n\t\t\tkey = \"N\",\n\t\t\tmods = \"CTRL|SHIFT\",\n\t\t\taction = a.PromptInputLine({\n\t\t\t\tdescription = wezterm.format({\n\t\t\t\t\t{ Attribute = { Intensity = \"Bold\" } },\n\t\t\t\t\t{ Foreground = { AnsiColor = \"Fuchsia\" } },\n\t\t\t\t\t{ Text = \"Enter name for new workspace\" },\n\t\t\t\t}),\n\t\t\t\taction = wezterm.action_callback(function(window, pane, line)\n\t\t\t\t\t-- line will be `nil` if they hit escape without entering anything\n\t\t\t\t\t-- An empty string if they just hit enter\n\t\t\t\t\t-- Or the actual line of text they wrote\n\t\t\t\t\tif line then\n\t\t\t\t\t\twindow:perform_action(\n\t\t\t\t\t\t\ta.SwitchToWorkspace({\n\t\t\t\t\t\t\t\tname = line,\n\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\tpane\n\t\t\t\t\t\t)\n\t\t\t\t\tend\n\t\t\t\tend),\n\t\t\t}),\n\t\t}\n```\n\\\nNow, you can easily toggle between 2 folders. While you may already be\nusing tabs for this, using Wezterm workspaces can be more efficient when\nextensively and cleverly scripted.\n";
						const data = {title:"Wezterm workspace switcher API",description:"How to make keybindings for a preset list of workspaces, and generate and switch to new workspaces on the fly.",pubDate:new Date(1706850000000),cover:
						new Proxy({"src":"/_astro/wezterm.kU37Fkjs.png","width":3840,"height":2880,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/wezterm.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/wezterm.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Wezterm configuration file with workspaces switcher keybindings.",tags:["wezterm","terminal","productivity"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/wezterm-configuration-tricks.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
