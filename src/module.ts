import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { CreateAxiosDefaults } from 'axios'

export interface ModuleOptions extends CreateAxiosDefaults {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'axios-nuxt-3',
    configKey: 'axios'
  },
  defaults: {},
  setup () {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))
  }
} )
