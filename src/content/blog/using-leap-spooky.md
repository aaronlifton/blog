---
title: "Using leap-spooky.nvim to manipulate text at a distance"
description: "Using leap-spooky.nvim to manipulate text at a distance"
pubDate: "Apr 21 2024"
tags: ["neovim"]
draft: false
featured: true
---

[leap-spooky.nvim](https://github.com/ggandor/leap-spooky.nvim) seems like it
can potentially save you thousands of keystrokes. It's kind of a mind-blowing
plugin. Here's a cheat sheet, since I found it a bit difficult to remember the
keystrokes. When the keystroke includes `leap`, that means to start the leap
movement for a word (type the first 2 letters of the word you want to yank or
move). One tip I found useful is to keep your eyes on the word you're targeting,
because otherwise you will have to look over the page and ignore all the other
leap targets, which puts a workload on your brain.

- `yrr-leap` Yank a line to the current line

  - `yRR` yank a line from another window to the current line, use capital R's
  - `1yrr-leap` yank a line and its succeeding line to the current line:

- `yss-leap` copy a line
  - `ySS-leap` copy a line from another window, use capital S's:
  - `2yss-leap` copy a line and its succeeding line

- `ys-leap` copy from the current word up to a later word

- `yriq-leap` copy the contents of any quoted string to the current position

`yriw-leap` Copy any visible word to the current position

- Copy the word after another word to the current position: `2yriw-leap`

- `ymiw` Copy any word just to the clipboard
  - `2ymmiw` Copy the word after another word to the clipboard

To use textobjects, start off with `yr` or `ys` and then use a textobject
pattern to operate on textobjects at a distance.
`ys(ir|ar|iR|aR|im|am|iM|aM|iq|aQ)-leap}`.