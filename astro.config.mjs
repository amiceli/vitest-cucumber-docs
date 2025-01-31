import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"

export default defineConfig({
    integrations: [
        starlight({
            title: "vitest-cucumber",
            logo: {
                src: "src/assets/logo.png",
            },
            social: {
                github: "https://github.com/amiceli/vitest-cucumber",
            },
            sidebar: [
                {
                    label: "Get started",
                    items: [
                        {
                            label: "Presentation",
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
                    ],
                },
                {
                    label: "Vitest plugin",
                    items: [
                        {
                            label: "Setup",
                            slug: "plugin/setup",
                        },
                    ],
                },
                {
                    label: "Features",
                    items: [
                        {
                            label: "Gherkin",
                            slug: "features/gherkin",
                        },
                        {
                            label: "Scenario",
                            slug: "features/scenario",
                        },
                        {
                            label: "Scenario Outline",
                            slug: "features/scenario-outline",
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
            ],
        }),
    ],
    devToolbar: {
        enabled: false,
    },
})
