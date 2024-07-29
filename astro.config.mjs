import { defineConfig } from 'astro/config'

import mdx from "@astrojs/mdx"

export default defineConfig({
    integrations: [mdx()],
    devToolbar: {
        enabled: false,
    },
    markdown : {
        shikiConfig : {
            theme: 'github-dark-default',
            langs : ['gherkin']
        }
    }
})
