---
title: "Schema Markup for AI Overviews: The Technical Guide"
description: "Schema markup has become essential for AI visibility. Here's which schemas matter most, how AI Overviews use structured data, and how to implement them correctly."
date: 2026-06-01
lastModified: 2026-06-01
author: "Jraft Creative"
category: "AI & SEO"
image: "/images/blog/what-is-geo-ai-search.webp"
imageAlt: "Code example showing JSON-LD schema markup for Organisation and Service types used in AI search optimisation"
keywords:
  - schema markup for AI overviews
  - schema markup AI SEO
  - JSON-LD for AI search
  - structured data AI visibility
  - Organisation schema
  - FAQ schema AI
  - llms.txt
  - AI overviews structured data
  - schema markup Singapore
draft: false
---

For years, schema markup was a technical SEO nice-to-have. It helped Google show rich snippets — star ratings, FAQ dropdowns, recipe cards — but it wasn't strictly necessary for ranking. You could ignore it and still perform well.

That's no longer the case.

With Google AI Overviews now triggering on 48% of all searches and AI platforms like ChatGPT, Gemini, and Perplexity relying on structured data to understand brands, schema markup has become the foundation of AI visibility. It's how you make your business machine-readable — and if AI can't read you, it can't recommend you.

Here's a technical guide to the schemas that matter, how AI uses them, and how to get them right.

## What Schema Markup Does for AI

Schema markup is structured data added to your website's HTML that tells machines exactly what your content means. Instead of AI having to interpret "Jraft Creative is a digital marketing agency based at 60 Paya Lebar Road, Singapore" from your About page, schema markup declares it explicitly in a format AI can parse instantly.

For AI platforms specifically, schema serves three functions:

**Entity definition.** Schema tells AI what kind of entity you are (organisation, local business, person), what you're called, and where you operate. This is the foundation of entity clarity — one of the primary signals AI uses to decide whether to recommend a brand.

**Service mapping.** Service and Product schemas define exactly what you offer, at what price, and in which geographic area. When someone asks ChatGPT "who does web design in Singapore for under SGD 5,000?", the AI can match that query against your structured service data rather than trying to extract pricing from marketing copy.

**Content structure.** FAQ, HowTo, and Article schemas organise your content in a way that AI can directly extract and cite. A well-structured FAQ with schema is far more likely to be quoted in an AI answer than the same information buried in a paragraph.

## The 5 Schemas That Matter Most for AI

Not all schema types are equally important for AI visibility. Based on our testing and implementation work across Singapore businesses, these five carry the most weight.

### 1. Organisation Schema

This is the most critical schema for AI visibility, and it's the one most businesses either skip or implement incompletely.

Organisation schema defines your brand as a distinct entity. It includes:
- Legal name and brand name
- Logo URL
- Contact details (phone, email)
- Social media profiles
- Founding date
- Area served
- Description

**Why it matters for AI:** Every AI recommendation starts with entity recognition. The AI needs to confidently identify your brand as a real, active organisation before it can recommend you. Organisation schema provides that confidence in a machine-readable format.

**The key fields most businesses miss:**
- `areaServed` — critical for local businesses. Without it, AI may not associate you with Singapore.
- `sameAs` — links to your social profiles and directory listings. This helps AI connect your brand across platforms.
- `knowsAbout` — declares your areas of expertise. Directly relevant to what queries AI associates you with.

### 2. Service Schema

Service schema defines each service you offer with structured detail.

Each service entry should include:
- Service name
- Description
- Service type
- Area served
- Price range or specific pricing
- Provider (linked to your Organisation schema)

**Why it matters for AI:** When a user asks "how much does SEO cost in Singapore?", AI platforms look for structured pricing data they can cite. A Service schema with `priceRange: "SGD 800 - SGD 3,000/month"` gives AI exactly what it needs. Without it, the AI has to guess from your marketing copy — or skip you entirely and cite a competitor who has structured data.

For Singapore businesses, include SGD pricing in your Service schema. AI models serving Singapore users will preferentially cite locally-priced services.

### 3. FAQ Schema

FAQ schema marks up question-and-answer pairs on your page. Each FAQ item contains a question and an accepted answer.

**Why it matters for AI:** AI models are fundamentally question-answering systems. When your FAQ schema directly matches the types of questions users ask AI, your answers become prime candidates for citation.

The ideal FAQ schema implementation:
- 10-20 questions per page
- Questions worded the way customers actually ask them (not how you'd phrase them)
- Answers that are 2-4 sentences of specific, factual information
- Avoid answers that are just "contact us to find out" — these provide no extractable value

FAQ schema is particularly powerful for Google AI Overviews. Pages with FAQ schema are significantly more likely to be cited in AI Overview answers because the structured format directly maps to how AI constructs responses.

### 4. Speakable Schema

Speakable schema identifies sections of your content that are suitable for audio playback and voice assistant responses — Siri, Google Assistant, Alexa, and voice modes in ChatGPT.

**Why it matters for AI:** Voice-based AI interactions need concise, spoken-word-friendly content. Speakable schema tells these systems which parts of your page work best when read aloud. Implement it on your business description, key service summaries, pricing, and contact details. Keep speakable sections under 200 words each.

### 5. HowTo Schema

HowTo schema structures step-by-step instructions — "How to choose a renovation contractor," "What to expect during an SEO audit," "Steps to set up a business in Singapore."

**Why it matters for AI:** Process-based queries ("How do I..." and "What steps...") are among the most common in AI search. HowTo schema provides exactly the structured format AI looks for. Each step should include a name and description (2-3 sentences), with optional fields for estimated time, tools needed, and costs. This schema is especially valuable for service businesses that can break their process into clear stages.

## How AI Overviews Use Schema

Google AI Overviews — the AI-generated answers at the top of search results — have a documented preference for structured data. The process follows a clear path: Google identifies the user's intent, scans indexed pages for relevant content (favouring pages where information is already structured), extracts specific data points like prices, steps, and entity details, then assembles a cited response.

The result: **pages with schema markup appear in AI Overviews at a significantly higher rate than pages without it**. This is observable in search analysis tools that track AI Overview citations.

For Singapore businesses, this means schema isn't just about future AI readiness. It directly impacts whether you appear in Google AI Overviews today, which trigger on nearly half of all searches.

## JSON-LD vs Microdata

There are two ways to implement schema: JSON-LD (a script block in your `<head>`) and Microdata (attributes embedded directly in your HTML elements). JSON-LD is the clear winner for AI.

Google explicitly recommends JSON-LD. It's easier for AI to parse because it's a clean data block separate from your HTML. It's simpler to maintain — update one script block rather than editing template attributes throughout your markup. It's less error-prone because it's independent of page layout changes. And it handles complex relationships (linking Organisation to Services to Reviews) far more cleanly than nested Microdata.

If you have existing Microdata, it still works. But for new implementations, use JSON-LD exclusively.

## llms.txt: The Schema for AI Crawlers

While schema markup targets search engines and AI that access your HTML, there's a newer standard designed specifically for large language models: **llms.txt**.

llms.txt is a plain-text file placed at your domain root (e.g., `jraftcreative.com/llms.txt`) that provides AI crawlers with a structured summary of your business. Think of it as robots.txt for LLMs — but instead of telling crawlers what to avoid, it tells them what to know about you.

### What to Include

A well-structured llms.txt covers: business identity (name, type, location), core services with brief descriptions, areas served, key differentiators (factual, not marketing fluff), contact information, social profile and directory URLs, links to recent content, and pricing tiers.

Use a simple Markdown-style format with headers for each section. Keep it under 2,000 words, factual, and concise. Update it whenever your services, pricing, or key details change — a stale llms.txt is worse than none at all.

llms.txt is still early-stage, but adoption is growing. Perplexity and several AI research crawlers already check for it, and having one in place means you're ready as the standard matures.

## Testing Your Schema

Implementation is only half the job. You need to verify that your schema is correct and that AI can actually use it.

### Google Rich Results Test

Visit [search.google.com/test/rich-results](https://search.google.com/test/rich-results) and enter your URL. This tool checks whether your schema is valid and eligible for rich results (and by extension, AI Overviews). Fix any errors it reports before moving on.

### Schema.org Validator

The [Schema.org validator](https://validator.schema.org/) checks your markup against the full Schema.org specification. It catches issues the Google tool might miss — like valid but suboptimal implementations.

### Manual AI Testing

Ask ChatGPT, Gemini, and Perplexity about your business directly: "Tell me about [your business name]," "What services does [your business name] offer?", and "What are the prices for [your service] in Singapore?" If the AI returns accurate information matching your schema, it's working. If responses are vague or incorrect, your schema isn't reaching AI platforms effectively. Test monthly as AI models update their understanding over time.

## Common Mistakes

After auditing schema implementations across dozens of Singapore business websites, these are the errors we see most frequently.

**Incomplete Organisation schema.** Missing `areaServed`, `sameAs`, or `contactPoint` fields. A partial schema is better than nothing, but fill in every relevant field for full AI visibility.

**Missing areaServed.** The single most common error for Singapore businesses. Without it, AI may not associate your brand with local queries like "best [service] in Singapore."

**No FAQ schema on FAQ pages.** The content exists but AI can't read it efficiently. Adding schema takes minutes and immediately makes your FAQ machine-readable.

**Inconsistent NAP data.** Name, Address, and Phone must be identical in your schema, Google Business Profile, directory listings, and website footer. "60 Paya Lebar Road" vs "60 Paya Lebar Rd" creates confusion for AI.

**Schema that doesn't match visible content.** AI platforms verify that schema data matches what's on the page. Discrepancies flag your structured data as unreliable.

**Not updating schema when details change.** Outdated schema actively teaches AI incorrect facts about your business. Update it whenever pricing, services, or location change.

**Using schema generators without review.** Automated tools produce technically valid but strategically weak markup, missing optional fields like `knowsAbout`, `hasOfferCatalog`, and `areaServed` that matter most for AI.

---

Schema markup is no longer optional for businesses that want to be visible in AI-powered search. It's the technical foundation that makes everything else — content strategy, review building, directory listings — work harder.

If you need help implementing schema markup that's optimised for AI visibility, our [AI SEO services](/ai-seo-singapore/) include full schema audits and implementation. For a broader AI search strategy that covers schema, content, and authority building, explore our [AI search optimisation service](/services/ai-search-optimisation/) or work with our [GEO team](/geo-agency-singapore/) for end-to-end management.

*Not sure where your schema stands? [Get in touch](/contact/) for a free structured data audit — we'll review your current implementation and show you exactly what's missing.*

---

### Want this handled for you?

Getting your business cited in AI Overviews requires the schema + content depth this post walks through, deployed at scale across your site — our GEO agency Singapore service is built for exactly this. **[GEO Agency Singapore →](/geo-agency-singapore/)**

---
