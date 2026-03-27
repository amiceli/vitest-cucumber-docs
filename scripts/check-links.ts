import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative, resolve } from "node:path"

const docsRoot = resolve("src/content/docs")

function collectRoutes(dir: string): Set<string> {
    const routes = new Set<string>()
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry)
        if (statSync(full).isDirectory()) {
            for (const r of collectRoutes(full)) routes.add(r)
        } else if (entry.endsWith(".mdx") || entry.endsWith(".md")) {
            const rel = relative(docsRoot, full)
            // /features/scenario.mdx → /features/scenario
            const route = `/${rel.replace(/\.(mdx?|md)$/, "")}`
            routes.add(route)
            // index files also serve as their directory route
            if (route.endsWith("/index")) {
                routes.add(route.replace(/\/index$/, "") || "/")
            }
        }
    }
    return routes
}

function extractInternalLinks(content: string): string[] {
    const links: string[] = []
    // markdown links: [text](/path) or [text](/path#anchor)
    for (const m of content.matchAll(/\]\((\/?[a-z][^)]*)\)/g)) {
        const href = m[1].split("#")[0]
        if (href.startsWith("/")) links.push(href)
    }
    // JSX href props: href="/path"
    for (const m of content.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
        links.push(m[1])
    }
    return links
}

const routes = collectRoutes(docsRoot)
let errors = 0

function checkFile(filePath: string) {
    const content = readFileSync(filePath, "utf-8")
    const links = extractInternalLinks(content)
    const rel = relative(docsRoot, filePath)

    for (const link of links) {
        const normalized = link.replace(/\/$/, "") || "/"
        if (!routes.has(normalized)) {
            console.error(`  ${rel}: broken link → ${link}`)
            errors++
        }
    }
}

function walkAndCheck(dir: string) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry)
        if (statSync(full).isDirectory()) {
            walkAndCheck(full)
        } else if (entry.endsWith(".mdx") || entry.endsWith(".md")) {
            checkFile(full)
        }
    }
}

walkAndCheck(docsRoot)

if (errors > 0) {
    console.error(`\n${errors} broken link(s) found.`)
    process.exit(1)
} else {
    console.log("All internal links OK.")
}
