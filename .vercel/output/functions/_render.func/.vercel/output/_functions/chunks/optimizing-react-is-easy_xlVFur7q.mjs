const id = "optimizing-react-is-easy.mdx";
						const collection = "blog";
						const slug = "optimizing-react-is-easy";
						const body = "\nReact uses something called **shallow prop comparison**. It's actually *quite* easy to understand and optimize, and \neveryone should be aware of this, for it is absolutely essential to react performance.\n\nSo About those dependency arrays used as the 2nd argument in `useMemo`, `useCallback`, etc. — they are compared with their previous versions as follows:\n\n```ts annotate\n// psuedo-code\nfunction propHasChanged(prev, next) {\n  return Object.is(prev, next);\n  //       ^\n  //     [Object equality. Remember, {} !== {}.]\n}\n```\n\nIn other words, React compares old and new props by shallow equality; that is, it considers whether each *new* prop is **referentially equal** to the *old* prop.\n\\\n\\\nThis means that if props or dependencies are _not_ primitive values. that is, they are **arrays**, **objects**, or **functions** (in Javascript, functions are objects too),\neven if they have the same value, each time the component is re-rendered, they will be considered unequal to their previous versions if they are not **memoized**.\nTo avoid causing extra re-renders by having non-primitive props, [simplify props or memoize props in the parent component](https://react.dev/reference/react/memo#minimizing-props-changes).\n\nBe careful of using objects in state, or as props, as they are not primitive values. If you need to use objects, make sure to memoize them using `useMemo` or `useCallback` as necessary.\n\n```ts annotate\nfunction MyFC({ obj }): React.FC<{ obj: { a: number, b: number } }> { \n  const myState  = useState({a: 1, b: 2});\n  return (\n    <div>\n      <MyComponent obj={myState} />\n//                         ^\n//              [myState causes re-renders]\n      <div>\n        <Subcomponent val={obj} />\n//                          ^\n//       [so does an object from props]\n      </div>\n    </div>\n  )\n}\n```\n\nWhen you use `useMemo`, your component re-renders whenever any element of the dependency array is not shallowly equal to its previous value. \nThis means that React compares every prop in your component with its previous value using the Object.is comparison.\n\nTherefore, all dependencies and props should be **PRIMITIVE VALUES**!\n\\\nFor example, `Object.is(3, 3)` is `true`, but `Object.is({}, {})` is `false`.\n";
						const data = {title:"Optimizing React is Easy",description:"Follow one simple rule to know where to apply memoization, the single most important performance utility in React.",pubDate:new Date(1702962000000),cover:
						new Proxy({"src":"/_astro/bad-component.RDAvZE0F.png","width":2830,"height":1654,"format":"png","fsPath":"/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/bad-component.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/assets/bad-component.png";
							}
							
							return target[name];
						}
					})
					,coverAlt:"An example of a component that 'for sure' needs memoization.",tags:["react","performance","optimization"]};
						const _internal = {
							type: 'content',
							filePath: "/Users/aaron/Code/astro/fullstack-dev-blog/src/content/blog/optimizing-react-is-easy.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
