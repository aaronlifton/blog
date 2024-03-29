---
title: "The state of rails monorepos in December 2023"
description: "The case for using React monorepos instead of Turbo/Hotwire - code
organization, testing, and performance."
pubDate: "Dec 19 2023"
cover: "./assets/hotwire.png"
coverAlt: "Ruby on Rails and Hotwire"
tags: ["rails", "hotwire", "monorepo"]
draft: true
---

## The uncertain future of rails monorepos in December 2023

Rails no longer has a default way to handle becoming a *monorepo* with a
frontend. Previously, it came with `webpacker`, and as the Javascript ecosystem
has evolved, it has made sense for Rails to decouple itself from the frontend build
process. So, **What build system should you use for a rails-react *monorepo* in
2023?** My current recommendation is `vite-rails`. `vite` is the way to go
unless you are working with `bun` or `deno`, which both offer a Vite-like
experience for their own runtimes. I also think `jsbundling-rails` with `bun` or
`esbuild` is a solid choice. Thinking long term, I think `vite` is the best
choice, because it is the most popular outside of the Rails ecosystem, and it is
the most likely to be supported in the future. It's a solid mainstream choice
that is likely to be supported by the Rails community given the relationship
Vite has to Next.js and Vue. Tooling like Vite is essential for adoption of
frontend frameworks today: Next.js, Astro.js, Remix, Vue.js, VueKit, Svelte, SvelteKit, and Nuxt.js.

## The simplest, most robust way to bundle a React frontend in your Rails *monorepo*, at the end of 2023

So, what build system should you use for a rails-react *monorepo* in 2023?

**My 2c, is that you should create a separate app (Next.js, or any edge-hosted
SPA), and use rails solely as a backend API.** This way, you free yourself of the
questionable future of Rails' frontend interoperability, and you avoid having to
ever render a page on the server with rails that is sent to the frontend, only
to have further rendering on the frontend by javascript. The frontend would be
much more performant with a simple node or Deno-powered server, rather than
being served by the already resource-heavy rails backend. It just makes sense to
separate frontend rendering from the same server responsible for sending and
receiving DB queries and POST/PUT HTTP requests.
Links:

- \[\[Vite-rails\]\]

### Why Hotwire and turbo is not the best choice today

1. There is not a lot of documentation

1. They don't provide any testing guidelines, the best I've found is hand-wavy
   test-with-a-browser stuff

1. Everything is essentially global

1. Functions are disconnected from their parameters, i.e. I can't tell which
   bits of data a function is using without digging through a bunch of code.

1. Putting state in your HTML is tricky if you also want to modify the DOM.

1. Their naming scheme is cumbersome:

   1. e.g. data-controller="using-a--sub-directory"
   1. data-target="some--nested--target-has-a.function"
   1. that is, the fact that everything is location-in-your-code-file-structure
      based. The framework lacking a layer of abstraction that would ;e

1. Turbo streams and data frames are simply not relevant to the current state of
   the web. I appreciate how other frameworks expand on the concept of the DOM
   in order to deliver a superior  experience.

And a lot of other small things.

Svelte, AstroJS are light-years ahead of Hotwire, and their feature-set is
comparable against Rails even - they provide total backend solutions. The Node.js
landscape has several "batteries-included" frameworks that provide utilities to
deal with sessions, cookies, and other things that Rails provides — this
includes SvelteKit, Nuxt, Next.js, Nest.js, and Deno Fresh. Node is definitely a great
replacement for Rails.

Compared to other modern frameworks, Stimulus involves writing what some may
consider to be "hacky" code — that is, code that is not easily
understandable or written in a way that is not easily maintainable. The various
data attributes here do not provide a clear way to understand what is happening,
and the word "target" fails to match the ergonomics provided by frameworks that
provide interfaces powered by abstract syntax trees or compilers, like React or Svelte.

```html
<div data-controller="hello">
  <input data-hello-target="name" type="text">

  <button data-action="click->hello#greet">Greet</button>

  <span data-hello-target="output"></span>
</div>
```

```js
// hello_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
}
```

It brings back some of the component lifecycle events from older versions of
react, and requires you to sprinkle the words "target" over your HTML, which is
actually difficult to parse. Instead of looking for certain data attributes or
values, Stimulus looks for suffixes of words - React is a much more developer
friendly framework, and I strongly recommend it for greenfield Rails projects.
