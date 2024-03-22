---
title: "An optimal monorepo setup for Rails and React in 2024"
description: "How to set up a proper monorepo with Nx, Vite, React, and Rails 7 in 2024."
pubDate: "Mar 22 2023"
cover: "./assets/hotwire.png"
coverAlt: "Ruby on Rails and Hotwire"
tags: ["rails", "hotwire", "monorepo"]
draft: true
---

## Setting up the monorepo with Nx

First, let's create a new folder for our project set up a monorepo with Nx.

```sh
~/Code  [v21.6] 
❯ mkcd nx

~/Code/nx 
❯ npx create-nx-workspace@latest
Need to install the following packages:
create-nx-workspace@18.1.2
Ok to proceed? (y) y

 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · rails-monorepo
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · remix
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · rails-monorepo
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Set up CI with caching, distribution and test deflaking · github

 NX   Creating your v18.1.2 workspace.

✔ Installing dependencies with npm
✔ Successfully created the workspace: rails-monorepo.
✔ CI workflow with Nx Cloud has been generated successfully
✔ CI workflow has been generated successfully

———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


 NX   Nx CLI is not installed globally.

This means that you will have to use "npx nx" to execute commands in the workspace.
Run "npm i -g nx" to be able to execute command directly.


 NX   Your Nx Cloud workspace is public

To restrict access, connect it to your Nx Cloud account:
- Push your changes
- Login at https://cloud.nx.app to connect your repository


~/Code/nx 
❯ npm i -g nx

added 111 packages in 5s
```

```
git clone ...
```

Now that we've created a Nx for Rails and React, we can start setting up the monorepo.
First, install dependencies via `pnpm i`, as `npm` has issues with certai Nx
repos.

1. Create a new Nx workspace via `npx create-nx-workspace@latest acme --preset=apps`
