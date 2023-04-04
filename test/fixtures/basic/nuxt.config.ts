import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  axios: {
    baseURL: 'https://swapi.dev/api/'
  }
})
