# Claude Local Setup — Curated Skills + magic-mcp

## Quick Install

### 1. Install magic-mcp (21st.dev)

```bash
npx @21st-dev/magic@latest
```

Add to `~/.claude/claude_desktop_config.json` (or `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac):

```json
{
  "mcpServers": {
    "magic": {
      "command": "npx",
      "args": ["@21st-dev/magic@latest"],
      "env": { "TWENTY_FIRST_API_KEY": "YOUR_KEY_HERE" }
    }
  }
}
```

Get your API key: https://21st.dev/magic/console

### 2. Install curated skills

```bash
git clone https://github.com/thatrebeccarae/claude-marketing.git /tmp/skills-source

for skill in market-research last30days icp-research competitors pricing-strategy \
  ads-meta ads-google ads-tiktok ads-landing ads-creative ads-math ads-budget wasted-spend-finder \
  frontend-design landing-page-optimizer cro-auditor schema-markup-generator html-report-builder \
  seo-content-writer programmatic-seo technical-seo-audit aeo-geo-optimizer topic-brief \
  brand-dna copywriting-frameworks competitor-ads-analyst cold-email-outreach \
  ads-attribution ads-server-side-tracking google-analytics google-tag-manager \
  repo-scaffold prd-generator dep-audit safe-push shopify; do
  cp -r /tmp/skills-source/skills/$skill ~/.claude/skills/ 2>/dev/null \
    && echo "✓ $skill" || echo "✗ $skill (not in repo — install separately)"
done
```

---

## Curated Skills — 36 Worth Keeping

### Research & Strategy

| Skill | What it does |
|-------|-------------|
| `/market-research` | Porter's / PESTLE / TAM-SAM-SOM full reports |
| `/last30days` | Real-time Reddit + social pulse on any topic |
| `/icp-research` | Customer persona deep-dives with interview scripts |
| `/competitors` | Systematic competitor teardowns |
| `/pricing-strategy` | Full pricing model + positioning framework |

### Ads

| Skill | What it does |
|-------|-------------|
| `/ads-meta` | Meta Ads expert — campaigns, audiences, creative strategy |
| `/ads-google` | Google Ads — search, PMax, shopping |
| `/ads-tiktok` | TikTok-specific creative + targeting |
| `/ads-landing` | Landing page conversion audit |
| `/ads-creative` | Ad creative strategy + hook writing |
| `/ads-math` | ROAS / CAC / LTV math |
| `/ads-budget` | Budget allocation across channels |
| `/wasted-spend-finder` | Finds money drains in live campaigns |

### Front-End / Build

| Skill | What it does |
|-------|-------------|
| `/frontend-design` | Full React/Tailwind component builds |
| `/landing-page-optimizer` | CRO + UX audit on any page |
| `/cro-auditor` | Conversion rate teardowns with specific fixes |
| `/schema-markup-generator` | JSON-LD structured data for SEO |
| `/html-report-builder` | Beautiful standalone HTML reports |

### SEO & Content

| Skill | What it does |
|-------|-------------|
| `/seo-content-writer` | Full SEO articles with NLP optimization |
| `/programmatic-seo` | Template-based SEO at scale |
| `/technical-seo-audit` | Crawl-level site audit |
| `/aeo-geo-optimizer` | AI search / answer engine optimization |
| `/topic-brief` | Research-backed content briefs |

### Brand & Copy

| Skill | What it does |
|-------|-------------|
| `/brand-dna` | Full brand strategy doc |
| `/copywriting-frameworks` | AIDA, PAS, StoryBrand applied to copy |
| `/competitor-ads-analyst` | Teardown of what competitors are running |
| `/cold-email-outreach` | B2B sequence writing |

### Analytics & Tracking

| Skill | What it does |
|-------|-------------|
| `/ads-attribution` | UTM + multi-touch attribution setup |
| `/ads-server-side-tracking` | Server-side pixel implementation |
| `/google-analytics` | GA4 setup, events, reporting |
| `/google-tag-manager` | GTM container builds |

### Engineering

| Skill | What it does |
|-------|-------------|
| `/repo-scaffold` | Spins up full project scaffolds |
| `/prd-generator` | Product requirements docs |
| `/dep-audit` | Dependency security + freshness audit |
| `/safe-push` | Safer git push workflow |

### Ecommerce

| Skill | What it does |
|-------|-------------|
| `/shopify` | Store setup, liquid templates, apps |

---

## Skills Cut (and Why)

| Cut | Reason |
|-----|--------|
| `ads-amazon`, `ads-apple`, `ads-linkedin`, `ads-microsoft`, `ads-youtube` | Platform-specific overkill for most projects |
| `ads-photoshoot`, `ads-generate`, `ads-plan`, `ads-test`, `ads-dna` | Duplicated by the 8 ads skills kept |
| `brand-voice-guidelines` | Covered by `/brand-dna` |
| `keywords` | Too basic — any LLM handles this |
| `llms-txt` | One trick, rarely needed |
| `github-readme` | Trivial |
| `remotion-video` | Niche |
| `social-preview` | Too narrow |
| `tech-diagram` | Rarely needed |
| `data-viz-deck` | Mediocre output |
| `utm-attribution-strategy` | Covered by `/ads-attribution` |
| `klaviyo-analyst`, `klaviyo-developer` | Keep only if deep in email |
| `repo-health`, `sync-repos` | Too generic / niche |
| `session-start-hook` | Config overhead, low value |
| `release-notes` | Dev-specific, trivial |

---

## System Prompt (paste into Claude)

```
You are Claude Code with a curated skill set and access to magic-mcp (21st.dev).

## MCP
magic-mcp is installed. Use it for production-ready React/Tailwind UI components.
Component library: https://21st.dev/community/components

## Design Reference
Use https://pulse-athletic.vercel.app/ as UI inspiration:
- Bold typography with extreme weight contrast
- Full-bleed hero sections with overlay text
- Dark backgrounds, high-contrast accent colors
- Clean mobile-first layouts

## Project Brief
https://docs.google.com/document/d/1ige8KZ7acvwhsPugB1jwotiPwQa5hyNJoMcZCMJbxKE/mobilebasic

## Available Skills (invoke with /skill-name)

RESEARCH   /market-research /last30days /icp-research /competitors /pricing-strategy
ADS        /ads-meta /ads-google /ads-tiktok /ads-landing /ads-creative /ads-math /ads-budget /wasted-spend-finder
FRONT-END  /frontend-design /landing-page-optimizer /cro-auditor /schema-markup-generator /html-report-builder
SEO        /seo-content-writer /programmatic-seo /technical-seo-audit /aeo-geo-optimizer /topic-brief
BRAND      /brand-dna /copywriting-frameworks /competitor-ads-analyst /cold-email-outreach
ANALYTICS  /ads-attribution /ads-server-side-tracking /google-analytics /google-tag-manager
ENGINEERING /repo-scaffold /prd-generator /dep-audit /safe-push
ECOM       /shopify

## Working Style
- RTL Hebrew UI: Assistant font for body, Heebo for numbers; always dir="rtl"
- WhatsApp links: wa.me format with pre-filled Hebrew messages
- Default to mobile-first vanilla HTML/CSS/JS unless asked for a framework
- When using magic-mcp: get the component, adapt it to the project design system
- Commit and push all work to the active branch
```
