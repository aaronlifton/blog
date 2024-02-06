---
title: Creating a sharedroot group in OSX to manage `/usr/local` and `/usr/bin`
description: How to share ownership of a folder with root, in order to install LaTeX packages via `tlmgr` or `fnt`, among other things.
pubDate: Jan 19 2024
cover: ./assets/screenshots/nvim-dscl.png
coverAlt: Neovim screenshot showing fish dscl function
tags: ["osx"]
---

Have you ever wanted to give yourself root permissions for certain folders in
\[OSX\], while not disrupting the default group settings of system folders? One
way to do this is to add yourself and the `root` user to a `sharedroot` group,
and then `chown -R` a folder to be owned by the new group, instead of just by
`root`.

I found this to be necessary to install certain LaTeX packages via `tlmgr`, and
to support installation of [fnt](https://github.com/alexmyczko/fnt), so I'm sure
someone reading this may find this useful! If you've had to elevate yourself via
`su`, rather than `sudo`, when installing something I haven't yet mentioned,
drop a comment!

## Show me the code

```sh annotate
sudo dscl . create /Groups/sharedroot PrimaryGroupID 101
sudo dscl . append /Groups/sharedroot GroupMembership aaron
#                                                       ^<<<
#                                  [your user name goes here]
sudo dscl . append /Groups/sharedroot GroupMembership root
dscacheutil -q group | grep -C 5 root
chown :shared_root /usr/local/texlive/texmf-local/tex/latex/local
```

Then, you can turn this into a \[fish\] shell function, since these commands are
hard to remember and unique to modern \[OSX\]:

```fish annotate
function createSharedRootGroup --description "adds user provided via argument to a shared group with root"
    set -lx username $argv[1]
#                       ^
#          [input your username as the argument]
    set -lx sharedRootGroup $(dscl . list /Groups | grep "sharedroot" | awk '{print $1}')
    if [$sharedRootGroup = "sharedroot"]
        return
    else
        sudo dscl . create /Groups/sharedroot PrimaryGroupID 101
        sudo dscl . append /Groups/sharedroot GroupMembership $username
        sudo dscl . append /Groups/sharedroot GroupMembership root
        chown :shared_root /usr/local/texlive/texmf-local/tex/latex/local
        echo $(dscl . list /Groups | grep -C 5 "sharedroot")
    end
end
```

## Final output

The final output of the command should look like this:

```fish
❯ dscacheutil -q group | grep -A 4 sharedroot
name: sharedroot
password: *
gid: 101
users: aaron root
```
