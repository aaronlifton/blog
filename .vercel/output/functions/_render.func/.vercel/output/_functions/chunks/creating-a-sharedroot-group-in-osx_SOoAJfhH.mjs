const id = "creating-a-sharedroot-group-in-osx.md";
						const collection = "blog";
						const slug = "creating-a-sharedroot-group-in-osx";
						const body = "\nHave you ever wanted to give yourself root permissions for certain folders in\n\\[OSX\\], while not disrupting the default group settings of system folders? One\nway to do this is to add yourself and the `root` user to a `sharedroot` group,\nand then `chown -R` a folder to be owned by the new group, instead of just by\n`root`.\n\nI found this to be necessary to install certain LaTeX packages via `tlmgr`, and\nto support installation of [fnt](https://github.com/alexmyczko/fnt), so I'm sure\nsomeone reading this may find this useful! If you've had to elevate yourself via\n`su`, rather than `sudo`, when installing something I haven't yet mentioned,\ndrop a comment!\n\n## Show me the code\n\n```sh annotate\nsudo dscl . create /Groups/sharedroot PrimaryGroupID 101\nsudo dscl . append /Groups/sharedroot GroupMembership aaron\n#                                                       ^<<<\n#                                  [your user name goes here]\nsudo dscl . append /Groups/sharedroot GroupMembership root\ndscacheutil -q group | grep -C 5 root\nchown :shared_root /usr/local/texlive/texmf-local/tex/latex/local\n```\n\nThen, you can turn this into a \\[fish\\] shell function, since these commands are\nhard to remember and unique to modern \\[OSX\\]:\n\n```fish annotate\nfunction createSharedRootGroup --description \"adds user provided via argument to a shared group with root\"\n    set -lx username $argv[1]\n#                       ^\n#          [input your username as the argument]\n    set -lx sharedRootGroup $(dscl . list /Groups | grep \"sharedroot\" | awk '{print $1}')\n    if [$sharedRootGroup = \"sharedroot\"]\n        return\n    else\n        sudo dscl . create /Groups/sharedroot PrimaryGroupID 101\n        sudo dscl . append /Groups/sharedroot GroupMembership $username\n        sudo dscl . append /Groups/sharedroot GroupMembership root\n        chown :shared_root /usr/local/texlive/texmf-local/tex/latex/local\n        echo $(dscl . list /Groups | grep -C 5 \"sharedroot\")\n    end\nend\n```\n\n## Final output\n\nThe final output of the command should look like this:\n\n```fish\n❯ dscacheutil -q group | grep -A 4 sharedroot\nname: sharedroot\npassword: *\ngid: 101\nusers: aaron root\n```\n";
						const data = {title:"Creating a sharedroot group in OSX to manage `/usr/local` and `/usr/bin`",description:"How to share ownership of a folder with root, in order to install LaTeX packages via `tlmgr` or `fnt`, among other things.",pubDate:new Date(1705640400000),cover:
						new Proxy({"src":"/_astro/nvim-dscl.wpUzifnr.png","width":3980,"height":2820,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/nvim-dscl.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/screenshots/nvim-dscl.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"Neovim screenshot showing fish dscl function",tags:["osx"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/creating-a-sharedroot-group-in-osx.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
