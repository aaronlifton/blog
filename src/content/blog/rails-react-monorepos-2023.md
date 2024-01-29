---
title: "The state of rails monorepos in December 2023"
description: "Lorem ipsum dolor sit amet"
pubDate: "Dec 19 2023"
image:
  src: "/blog-placeholder-4.jpg"
  alt: "Second post"
tags: ["second", "post"]
---

## The uncertain future of rails monorepos in December 2023

Rails no longer has a default way to handle becoming a _monorepo_ with a
frontend. Previously, it came with `webpacker`, and as the javascript ecosystem
has evolved, it makes sense for Rails to decouple itself from the frontend build
process. So, **What build system should you use for a rails-react _monorepo_ in
2023?** My current reccomendation is `vite-rails`. `vite` is the way to go
unless you are working with `bun` or `deno`, which both offer a vite-like
experience for their own runtimes. I also think `jsbundling-rails` with `bun` or
`esbuild` is a solid choice. Thinking long term, I think `vite` is the best
choice, because it is the most popular outside of the Rails ecosystem, and it is
the most likely to be supported in the future. It's a solid mainstream choice
that is likely to be supported by the Rails community given the relationship
Vite has to Next.js and Vue. Tooling like vite is essential for adoption of
frontend frameworks today: Next.js, Vue.js, VueKit, and Nuxt.js.

## The simplest, most robust way to bundle a React frontend in your Rails _monorepo_, at the end of 2023

So, what build system should you use for a rails-react _monorepo_ in 2023?

My 2c, is that you should create a separate app (Next.js, or any edge-hosted
SPA), and use rails solely as a backend API. This way, you free yourself of the
questionable future of Rails' frontend interoperability, and you avoid having to
ever render a page on the server with rails that is sent to the frontend, only
to have further rendering on the frontend by javascript. For those who are still
upgrading to the latest Rails, or simply want to feel like they did in 2018,
shakapacker is available as a drop-in replacement for webpacker.

So, jsbundling-rails and cssbundling-rails is all you need, safely ignore the
rest. Took me a few hours to get to this conclusion when upgrading an old Rails
app.

Links:

- \[\[vite-rails\]\]

### Why hotwire and turbo is not the best choice today

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
   in order to deliver a superior ioooooooooo

And a lot of other small things.

Ironically, using Stimulus convinced me to switch to Vue because I liked their
value proposition of "Javascript sprinkles for your HTML", which Vue lets me do,
but more intuitively. [Source](https://news.ycombinator.com/item?id=25309809)

Turbo can be summarized as, being the right choice, if: your favorite company is
basecamp and you want to struggle to implement concepts that are actually easily
implemnted in React.

Stimulus involves writing "hacky" code:

```
<div data-controller="hello">
  <input data-hello-target="name" type="text">

  <button data-action="click->hello#greet">Greet</button>

  <span data-hello-target="output"></span>
</div>
```

```
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

So it brings back some of the component lifecycle events from older versions of
react, and requires you to sprinkle the words "target" over your HTML, which is
actually difficult to parse. Instead of looking for certain data attributes,
Stimulus looks for suffixes
