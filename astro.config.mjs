import sitemap from "@astrojs/sitemap"
import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import cssVariablesTheme from "./src/themes/css-variables.json"

export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: cssVariablesTheme,
        },
    },
    integrations: [
        starlight({
            title: "vitest-cucumber",
            logo: {
                src: "src/assets/logo.png",
            },
            expressiveCode: false,
            components: {
                ThemeSelect: "./src/components/ThemeToggle.astro",
                SiteTitle: "./src/components/SiteTitle.astro",
            },
            social: [
                {
                    icon: "github",
                    label: "github",
                    href: "https://github.com/amiceli/vitest-cucumber",
                },
            ],
            sidebar: [
                {
                    label: "Guide",
                    collapsed: true,
                    items: [
                        {
                            label: "Get Started",
                            slug: "get-started/presentation",
                        },
                        {
                            label: "Installation",
                            slug: "get-started/install",
                        },
                        {
                            label: "Configuration",
                            slug: "get-started/configuration",
                        },
                        {
                            label: "Browser mode",
                            slug: "get-started/browser-mode",
                        },
                        {
                            label: "Utilities",
                            slug: "integrations/utilities",
                        },
                    ],
                },
                {
                    label: "Features",
                    collapsed: true,
                    items: [
                        {
                            label: "Feature",
                            slug: "features/feature",
                        },
                        {
                            label: "Scenario",
                            slug: "features/scenario",
                        },
                        {
                            label: "Scenario Outline",
                            collapsed: true,
                            items: [
                                {
                                    label: "Use Scenario Outline",
                                    slug: "features/scenario-outline",
                                },
                                {
                                    label: "Mapped examples",
                                    slug: "features/mapped-examples",
                                },
                            ],
                        },
                        {
                            label: "Background",
                            slug: "features/background",
                        },
                        {
                            label: "Rule",
                            slug: "features/rule",
                        },
                        {
                            label: "Hooks",
                            slug: "features/hooks",
                        },
                        {
                            label: "Predefine steps",
                            slug: "features/predefine-steps",
                        },
                        {
                            label: "Structure context",
                            slug: "features/structure-context",
                        },
                        {
                            label: "skip / only",
                            slug: "features/skip-only",
                        },
                        {
                            label: "Tags",
                            slug: "features/gherkin-tags",
                        },
                        {
                            label: "Sequentially / Async",
                            slug: "features/sequentially-and-async",
                        },
                        {
                            label: "Step expressions",
                            slug: "features/step-expression",
                        },
                        {
                            label: "DocStrings",
                            slug: "features/doc-strings",
                        },
                        {
                            label: "Date tables",
                            slug: "features/data-tables",
                        },

                        {
                            label: "Spoken language",
                            slug: "features/spoken-languages",
                        },
                        {
                            label: "Load feature from text",
                            slug: "features/load-feature-from-text",
                        },
                        {
                            label: "Tests without feature file",
                            slug: "features/define-feature",
                        },
                    ],
                },
                {
                    label: "Integrations",
                    collapsed: true,
                    items: [
                        {
                            label: "Vitest plugin",
                            slug: "integrations/setup",
                        },
                        {
                            label: "Astro",
                            slug: "integrations/astro",
                            badge: { text: "New", variant: "success" },
                        },
                    ],
                },
                {
                    label: "Examples",
                    collapsed: true,
                    items: [
                        {
                            label: "Vitest",
                            slug: "examples/vitest",
                        },
                        {
                            label: "Vue",
                            slug: "examples/vue",
                        },
                        {
                            label: "React",
                            slug: "examples/react",
                        },
                        {
                            label: "Astro",
                            slug: "examples/astro",
                        },
                    ],
                },
            ],
            customCss: ["./src/styles/custom.css"],
            head: [
                {
                    tag: "script",
                    attrs: {
                        src: "https://plausible.volpe.xyz/script.js",
                        "data-website-id":
                            "9955448a-8fa1-43ed-85ee-8492a6126934",
                        "data-domains": "vitest-cucumber.miceli.click",
                        defer: true,
                    },
                },
                {
                    tag: "link",
                    attrs: {
                        src: "/sitemap-index.xml",
                        rel: "sitemap",
                    },
                },
            ],
        }),
        sitemap(),
    ],
    devToolbar: {
        enabled: false,
    },
    server: {
        port: 3333,
    },
    site: "https://vitest-cucumber.miceli.click/",
})
