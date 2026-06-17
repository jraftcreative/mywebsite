---
title: "How AI Models Decide Which Brands to Recommend (ChatGPT, Gemini, Claude, Perplexity)"
description: "Ever asked an AI assistant for a recommendation and wondered why it named those brands? Here's what we found after testing hundreds of prompts across ChatGPT, Gemini, Claude, and Perplexity in Singapore industries."
date: 2026-06-17
author: "Jraft Creative"
category: "AI & SEO"
image: "/images/blog/ai-models-brand-recommendations.webp"
imageAlt: "Smartphone displaying an AI chatbot interface with another AI assistant prompt visible in the blurred background — illustrating the multi-AI landscape of brand recommendation engines"
keywords:
  - how do AI models decide which brands to recommend
  - how does chatgpt decide which brands to recommend
  - AI brand recommendations Singapore
  - chatgpt brand recommendations
  - Gemini brand visibility
  - Perplexity brand visibility
  - Claude brand recommendations
  - chatgpt optimisation Singapore
  - AI brand visibility
  - LLMO Singapore
  - GEO brand signals
  - ChatGPT browsing mode
  - AI search recommendations
  - LLM brand visibility Singapore
draft: false
---

Every business owner in Singapore has done it by now. You open ChatGPT — or Gemini, or Claude, or Perplexity — type "best [your industry] in Singapore," and scan the answer to see if your brand appears. If it does, you breathe easy. If it doesn't — and your competitor's name is right there — you want to know why.

The short answer: these AI assistants don't work like Google. None of them have a fixed list of ranked websites. Each constructs an answer every time based on a mix of training data, live web access, and probabilistic reasoning. The mechanics vary slightly between models, but the underlying brand signals they reward are remarkably consistent.

Here's what we've learned after running hundreds of tests across ChatGPT, Gemini, Claude, and Perplexity in Singapore industries. We'll use ChatGPT as the primary worked example because it's the most tested and most widely used — then show how the other models compare.

## How ChatGPT Sources Information

ChatGPT pulls brand information from two distinct sources, depending on the model and mode the user is in.

### Training Data

ChatGPT's base knowledge comes from a massive dataset of text scraped from the internet. This includes websites, forums, news articles, review platforms, industry directories, Wikipedia, and publicly available documents. The training data has a knowledge cutoff — meaning anything published or changed after that date isn't in the base model's memory.

For brand recommendations, this means ChatGPT "knows" about your business based on what existed online at the time of its last training run. If your website was thin, your reviews were sparse, and your directory presence was minimal at that point, ChatGPT may have a weak understanding of who you are — or none at all.

### Browsing Mode and Bing Web Search

ChatGPT also has browsing capabilities that allow it to search the live web via Bing. When a user asks a question that benefits from current data — like "best marketing agency in Singapore 2026" — ChatGPT may pull live results from Bing, recent articles, review sites, and directory listings.

This is important because it means your current online presence matters, not just your historical one. A brand that has been actively building reviews, publishing content, and maintaining directory listings in the past 90 days has a significant advantage over one that set-and-forgot their website two years ago.

## The 4 Signals AI Models Evaluate

Through extensive testing across ChatGPT, Gemini, Claude, and Perplexity, four recurring signals determine whether an AI assistant names a specific brand in its recommendations. The weighting varies between models — but the signals themselves are consistent.

### 1. Entity Clarity

ChatGPT needs to understand what your brand is, what you do, and where you operate. This might sound obvious, but many businesses fail here.

Entity clarity comes from structured data — specifically JSON-LD schema markup on your website. When you define an Organization schema with your name, services, location, and contact details, you're giving AI a machine-readable identity card. Without it, AI has to piece together who you are from scattered mentions across the web.

Brands with strong entity clarity appear in AI answers more consistently. Those without it get overlooked in favour of competitors who are easier for the model to understand.

### 2. Content Extractability

ChatGPT doesn't read your website the way a human does. It scans for information it can extract, quote, or paraphrase in its response.

Pages that work well for AI extraction share common traits:
- Clear headings that signal what each section covers
- Fact-dense paragraphs rather than vague marketing copy
- Specific numbers, pricing, and data points
- Q&A formatting that matches how users actually ask questions
- Comparison tables that let AI pull structured information quickly

Pages that perform poorly: those with heavy imagery and little text, generic "we're passionate about delivering results" copy, and content buried inside JavaScript-rendered elements that crawlers struggle with.

### 3. Third-Party Authority

This is perhaps the most underestimated signal. ChatGPT doesn't just look at what you say about yourself — it looks at what others say about you.

Third-party authority comes from:
- **Google Reviews** — volume and recency matter more than a perfect 5.0 rating
- **Industry directories** — Clutch, GoodFirms, SortList, and Singapore-specific directories like SgPbiz and Singapore Business Directory
- **Press coverage** — articles, interviews, and features on third-party sites
- **Professional profiles** — LinkedIn company pages, industry association memberships
- **Forum mentions** — Reddit, HardwareZone (significant in Singapore), Quora

The more independent sources confirm your brand's existence and quality, the more confident ChatGPT is in recommending you. A brand with 50 Google Reviews, Clutch verification, and mentions on three industry forums will almost always outperform one with a better website but zero external validation.

### 4. Information Freshness

AI engines weight recent information heavily. This applies both to your own content and to third-party mentions.

Freshness signals include:
- Blog posts and articles published within the last 30-90 days
- Recent Google Reviews (a steady stream matters more than a batch from two years ago)
- Updated service pages with current pricing and offerings
- Active social media profiles (these feed into the broader data ecosystem)
- Recent press mentions or directory updates

In our testing, brands that had published or updated content within the previous 14 days appeared in ChatGPT recommendations roughly 3x more often than brands with identical authority but stale content.

## What ChatGPT's Browsing Mode Changes

When ChatGPT uses browsing mode, the dynamics shift significantly.

In standard mode, ChatGPT relies entirely on its training data. Your brand either made it into the training set or it didn't, and there's limited ability to change that until the next training run.

In browsing mode, ChatGPT searches Bing for live results. This means:
- **Bing SEO matters.** If your site ranks well on Bing for relevant queries, ChatGPT is more likely to encounter and cite you.
- **Recency becomes critical.** Content published this week carries far more weight than content from six months ago.
- **Review platforms are scanned in real-time.** A recent five-star Google Review can influence today's recommendation.
- **Directory listings are checked.** Your Clutch profile, industry directories, and business listings become live data sources.

As more users interact with ChatGPT in browsing mode (which is the default for many queries now), having a strong, current web presence becomes even more important than historical training data inclusion.

## How Other AI Models Compare

While ChatGPT is the most-tested platform, the same dynamics apply across the wider AI landscape — with one key variation: where each model gets its live information.

- **Google Gemini** searches the live web through Google directly. If you rank well on Google for relevant terms, you have a head start on Gemini visibility — but Gemini still weighs the same brand signals (entity clarity, third-party validation, content extractability) when deciding which brands to name.
- **Anthropic's Claude** (with web search enabled) uses its own search infrastructure. Claude tends to favour content with clear structure and authoritative third-party references, and is generally more conservative than ChatGPT about naming specific brands without strong validation.
- **Perplexity** is search-first by design — every response is grounded in live web results with visible citations. This makes Perplexity's brand-naming behaviour the most predictable of the four: brands that surface in its underlying search results surface in its answers.
- **Microsoft Copilot / Bing Chat** uses Bing as its live source — the same underlying search infrastructure as ChatGPT's browsing mode, but with tighter integration into Microsoft's ecosystem.

Despite the variation in sourcing, all four models reward the same underlying brand-signal architecture. Optimise once, and you compound across the AI search landscape.

## Why Your Google Ranking Doesn't Always Help

Here's the stat that catches most business owners off guard: **the overlap between the top Google results and brands cited by AI has dropped below 20%**.

You can rank #1 on Google for "best web design agency Singapore" and still not appear in ChatGPT's answer to the same question. The two systems evaluate entirely different signals.

Google's algorithm rewards backlinks, page authority, keyword optimisation, and click-through rates. ChatGPT evaluates entity clarity, third-party mentions, content structure, and information that it can confidently attribute.

A small agency with 200 genuine Google Reviews, a well-structured website with schema markup, and listings on five industry directories can outperform a much larger competitor that has strong backlinks but thin directory presence and no structured data.

This isn't theoretical — we've seen it happen repeatedly in Singapore across industries from F&B to professional services.

## Real Example: Testing a Singapore Industry

We ran a structured test across ChatGPT, asking "best digital marketing agency in Singapore" across 50 separate sessions over two weeks. Here's what we observed:

- **No single agency appeared in every response.** The most frequently cited brand appeared in roughly 68% of answers. The second most frequent appeared in about 45%.
- **Brand lists varied between sessions.** ChatGPT named anywhere from 3 to 6 agencies per response, and the specific mix changed each time.
- **Agencies with Clutch profiles were cited 3.2x more often** than those without any directory presence.
- **Agencies with schema markup and clear service pages** were cited more consistently than those with only a homepage and contact page.
- **Recently reviewed agencies** (reviews within 30 days) were cited more than those whose last review was 6+ months old.

This probabilistic nature is crucial to understand. ChatGPT doesn't maintain a fixed ranking. Every response is generated fresh. Your goal isn't to "rank #1 in ChatGPT" — it's to increase the probability that your brand appears in as many responses as possible.

## How to Influence AI Recommendations

Based on what we've tested and observed, here are the practical steps that move the needle.

**Implement schema markup.** At minimum, add Organization, LocalBusiness, and Service schemas to your website. This is the single highest-impact technical change you can make for AI visibility. If you also have FAQ content, add FAQ schema.

**Build a steady review pipeline.** Don't aim for a burst of reviews — aim for consistency. Two to three new Google Reviews per month signals ongoing activity and customer satisfaction. Respond to every review, positive or negative.

**Restructure content for extraction.** Audit your key service pages. Do they contain specific, quotable statements? Or are they full of vague promises? Rewrite them with clear facts: what you offer, who it's for, what it costs, and what results you deliver.

**Claim and maintain directory listings.** At a minimum: Google Business Profile, Clutch, GoodFirms, and three Singapore-specific directories. Keep all information consistent — name, address, phone number, website, and services should match exactly across every listing.

**Publish regularly.** A blog post every two weeks keeps your content fresh in both training data and browsing mode results. Focus on genuinely useful content rather than keyword-stuffed filler.

**Create an llms.txt file.** This is a plain-text file at your domain root (yoursite.com/llms.txt) that provides AI crawlers with a structured summary of your business, services, and key facts. Think of it as a robots.txt specifically designed for large language models.

## The Singapore Opportunity

Singapore's 60.9% AI adoption rate means your customers are already using these tools — across ChatGPT, Gemini, Claude, Perplexity, and Microsoft Copilot. But the supply side hasn't caught up: **fewer than half of Singapore businesses have any GEO strategy in place**.

That gap is your window. Businesses that optimise for AI recommendations now are establishing themselves as the brands that the major AI models learn to trust. Once that trust is built, it becomes significantly harder for latecomers to displace them — because the same brand-signal architecture that earns you a citation on ChatGPT compounds across every AI assistant that follows.

The cost of inaction is measurable. Every day that a competitor appears in AI recommendations and you don't, they're capturing the highest-converting traffic on the internet — visitors who arrive pre-sold because a trusted AI recommended them.

---

If you want to understand exactly how your brand currently performs across ChatGPT and other AI platforms, our [ChatGPT optimisation service](/chatgpt-optimisation-singapore/) includes a full visibility audit and implementation plan. For a broader strategy covering all AI search engines, see our [LLMO services](/llmo-services-singapore/) or explore working with a dedicated [GEO agency](/geo-agency-singapore/) that handles everything from schema markup to review strategy and content restructuring.

*Want a free check? [Get in touch](/contact/) — we'll test your brand across ChatGPT, Gemini, Perplexity, and Google AI Overviews and show you exactly where you stand.*

---

### Want this handled for you?

Getting recommended across ChatGPT, Gemini, Claude, and Perplexity requires the brand-signal architecture, content depth, and authority footprint this post walks through — built across your site and the wider web. Our service is built for exactly that.

**[Get Recommended by ChatGPT — Singapore →](/get-recommended-by-chatgpt-singapore/)**

---
