export default defineNuxtConfig({
  modules: ['../src/module'],
  axios: {
    baseURL: 'https://swapi.dev/api/'
  }
})
