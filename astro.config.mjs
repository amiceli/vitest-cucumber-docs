import mdx from "@astrojs/mdx"
import pagefind from "astro-pagefind"
import { defineConfig } from "astro/config"

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
