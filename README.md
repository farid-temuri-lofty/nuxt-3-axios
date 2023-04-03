# Axios in Nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Axios in Nuxt 3 with batteries included for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-3-axios?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features


Now you can get typed axios instance inside your nuxt app from Nuxt context

`nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-3-axios'
  ],
  axios:{
    baseURL: 'https://swapi.dev/api/'
    //options to pass Axios Config
  }
})
```
[Axios config options here!](https://www.google.com "Google's Homepage")


`Example.vue`
```js
const { $axios } = useNuxtApp() 

const result = await $axios.get('/people/1')

// result =  {
// 	"name": "Luke Skywalker",
// }

```

## Quick Setup

1. Add `nuxt-3-axios` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-3-axios

# Using yarn
yarn add --dev nuxt-3-axios

# Using npm
npm install --save-dev nuxt-3-axios
```

2. Add `nuxt-3-axios` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-3-axios'
  ],
  axios:{
    //options to pass to axios create https://axios-http.com/docs/instance
    baseURL: 'https://swapi.dev/api/'
  }
})
```

That's it! You can now use Axios in Nuxt 3 in your app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-3-axios/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-3-axios

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-3-axios.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-3-axios

[license-src]: https://img.shields.io/npm/l/nuxt-3-axios.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-3-axios

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
