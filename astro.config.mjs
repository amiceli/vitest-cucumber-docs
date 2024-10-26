import { defineConfig } from "astro/config"
import pagefind from "astro-pagefind"
import mdx from "@astrojs/mdx"

export default defineConfig({
    integrations: [mdx(), pagefind()],
    devToolbar: {
        enabled: false,
    },
    build: {
        format: "file",
    },
    markdown: {
        shikiConfig: {
            theme: "github-dark-default",
            langs: ["gherkin"],
        },
    },
})
