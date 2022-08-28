# swyx's SvelteKit monorepo starter

This is my starter for a monorepo with 2022 tech:

- SvelteKit
- [Turborepo](https://www.swyx.io/turborepo-why) 
- [Histoire](https://histoire.dev/)
- [pnpm](https://pnpm.io) - `brew install pnpm`

## What's inside?

### Apps and Packages

- Apps
  - `dashboard`: a SvelteKit app. This is the end product that end users should be seeing. Feel free to clone this if building more.
  - `ui`: a stub Svelte component library usable by the `dashboard` app
    - with a `histoire` storybook you can also run for dev, or publish
    - it is also set up for you to publish the component library with `svelte-package`
- Packages
  - `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- We have opted for using jsdoc types for now, but that opinion is open for debate.
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

```bash
pnpm # to install all the things
```

### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
cd my-turborepo
pnpm run dev
```

### Installing packages

To install a `library` package in the `ui` workspace with pnpm:

```bash
pnpm add --filter ui library
```

### Run histoire

```bash
pnpm --filter ui story:dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Turborepo Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Useful Links

- https://www.seancdavis.com/posts/use-pnpm-with-netlify/