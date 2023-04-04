import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('$axios on', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })
  it('ssr page', async () => {
    const html = await $fetch( '/' )
    expect(html).toContain(`&quot;name&quot;: &quot;Luke Skywalker&quot;`)
  } )
})
