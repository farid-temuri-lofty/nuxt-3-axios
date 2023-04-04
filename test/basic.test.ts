import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'
import { useNuxtApp } from 'nuxt/app'

describe('$axios on', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })
  it('ssr page', async () => {
    const html = await $fetch( '/' )
    console.log(html);
    expect(html).toContain(`&quot;name&quot;: &quot;Luke Skywalker&quot;`)
  } )
})
