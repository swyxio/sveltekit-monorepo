This `/apps` folder contains 

- `/ui`: the UI library of isolated Svelte components you develop
  - with a `histoire` storybook set up for you that you could also publish if you wish
- `/dashboard`: the actual Sveltekit app that end users should see
  - imports components from `ui`

All have been set up with JSDoc types, (and hopefully Tailwind someday).