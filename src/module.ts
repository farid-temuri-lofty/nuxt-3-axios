import { defineNuxtModule, addPlugin, createResolver, addTemplate} from '@nuxt/kit'
import { CreateAxiosDefaults } from 'axios'

export interface ModuleOptions extends CreateAxiosDefaults {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'axios-nuxt-3',
    configKey: 'axios'
  },
  setup( options ) {
    const resolver = createResolver(import.meta.url)

    addTemplate( {
      filename: 'axios-options.mjs', getContents() {
      return `export const axiosOptions = ${JSON.stringify(options)}`
    }})

    addPlugin(resolver.resolve('./runtime/plugin'))
  }
} )
