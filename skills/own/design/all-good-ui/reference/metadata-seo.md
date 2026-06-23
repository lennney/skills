# Metadata & SEO Reference

<!-- Miranda says: "Search engines can't appreciate your animations. AI overviews won't
     admire your color palette. They read your metadata, your structure, your schema.
     Get the invisible layer right or your beautiful page stays invisible." -->

---

## Page-Level Metadata

### Title

- Every page must have a unique, descriptive `<title>`.
- Format: `Page Name | Site Name` or `Page Name — Site Name`.
- Keep under 60 characters. Search engines truncate after that.
- The title must describe what the page actually contains, not what you wish it contained.
- Homepage title should include the brand name and primary value proposition.

### Meta Description

- Every shareable page needs a `<meta name="description">`.
- Write a compelling 120-155 character summary of the page content.
- This is ad copy for search results. Make it count.
- Do not stuff keywords. Write for humans who are deciding whether to click.
- Each page must have a unique description. Duplicate descriptions across pages devalue all of them.

### Canonical URL

- Every page must declare `<link rel="canonical" href="...">`.
- The canonical URL must point to the preferred version of the page.
- Must be an absolute URL, not relative.
- If content exists at multiple URLs (www vs non-www, http vs https, trailing slash variants), all versions must point to the single canonical.
- Paginated content: each page is its own canonical unless you consolidate with a view-all page.

### Language

- `<html lang="...">` is required. Set it to the primary language of the content.
- For Traditional Chinese content: `lang="zh-Hant"` or `lang="zh-TW"`.
- For English: `lang="en"`.
- This affects screen reader pronunciation, browser translation prompts, and search engine language detection.

---

## Open Graph (OG) Tags

Required for any page that might be shared on social media (which is every page).

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Compelling summary of the page">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Site Name">
```

**Rules:**
- `og:image` must be an absolute URL. Relative paths break on every platform.
- Recommended image size: 1200x630px for general sharing.
- `og:url` must match the canonical URL.
- `og:title` can differ from `<title>` — optimize it for social context.
- `og:description` can differ from meta description — optimize it for social context.

## Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Compelling summary">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

**Rules:**
- Use `summary_large_image` for content pages with a strong visual.
- Use `summary` for pages where the image is secondary.
- `twitter:image` must also be an absolute URL.
- If OG tags are set and Twitter tags are missing, most platforms fall back to OG. But explicit is better than implicit.

---

## Favicon & PWA Basics

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#ffffff">
```

**Rules:**
- Every site needs a favicon. Browser tabs without icons look broken.
- Provide both `.ico` (legacy) and `.svg` (modern, supports dark mode).
- Apple touch icon should be 180x180px.
- `theme-color` sets the browser chrome color on mobile. Match it to your design.
- If the site is a web app, include a `manifest.json` with name, icons, and theme color.

---

## Semantic HTML for Search

### Heading Hierarchy

- One `<h1>` per page. It describes the page topic.
- Headings must follow hierarchy: `<h1>` > `<h2>` > `<h3>`. No skipping levels.
- Headings are structural, not decorative. Do not use `<h3>` because you want smaller text.
- Search engines and AI systems use heading hierarchy to understand content structure and importance.

### Image Alt Text

- Every content image needs descriptive `alt` text.
- Decorative images use `alt=""`.
- Alt text should describe the content or function, not the file name.
- For charts and infographics, describe the key data point or conclusion.
- Screen readers and search engines both rely on alt text.

### Structured Content

- Use lists (`<ul>`, `<ol>`) for enumerable items.
- Use tables for comparative or tabular data.
- Use `<blockquote>` for quotations.
- Use `<time datetime="...">` for dates.
- Use `<address>` for contact information.
- These elements carry semantic meaning that plain `<div>` and `<span>` do not.

---

## JSON-LD Structured Data

Structured data helps search engines and AI systems understand what your page represents.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "...",
  "description": "..."
}
</script>
```

**Rules:**
- JSON-LD must reflect the actual rendered content. Do not invent data that is not on the page.
- Common types: Article, FAQPage, HowTo, Product, LocalBusiness, BreadcrumbList, WebSite.
- Place JSON-LD in the `<head>` or at the end of `<body>`.
- Validate with Google's Rich Results Test before shipping.
- Do not add structured data for content that does not exist on the page. Google penalizes mismatches.

**Common types and when to use them:**
- `FAQPage` — page has visible question-answer pairs.
- `HowTo` — page has step-by-step instructions.
- `BreadcrumbList` — site has breadcrumb navigation.
- `Article` — blog posts, news, editorial content.
- `Product` — product pages with price, availability, reviews.
- `LocalBusiness` — business with a physical location.

---

## AIO / GEO / SGE: Beyond Traditional SEO

SEO has evolved. Search engines now do more than rank pages — they read content and generate answers. This section covers what matters for AI-powered search.

### The Shift

- **AIO** (AI Optimization): Structuring content so AI systems can extract, quote, and recommend it.
- **GEO** (Generative Engine Optimization): Optimizing for AI-generated search results and overviews.
- **SGE** (Search Generative Experience): Google's AI-powered search that synthesizes answers from multiple sources.

Traditional SEO focused on keywords and backlinks. AIO/GEO/SGE focuses on content architecture, structured data, and answer-ready formatting. Keyword density is dead. Content structure is the scoring factor.

### What AI Search Engines Look For

AI systems select content to quote and recommend based on:

1. **Specific information over vague descriptions.** Numbers, prices, ratings, measurements, dates — concrete data gets cited. "Our service is affordable" gets ignored. "$45/session, 60 minutes, includes follow-up" gets quoted.

2. **Clear question-answer format.** FAQ sections with explicit questions and direct answers are the highest-scoring element for SGE. The question must be in a heading or strong element. The answer must immediately follow.

3. **Comparison tables.** When users are deciding between options, AI overviews pull from structured comparison data. Use real `<table>` elements with `<th>` headers.

4. **Lists and steps.** Numbered steps for processes, bulleted lists for features or options. AI systems parse these structures reliably.

5. **Heading hierarchy as topic map.** AI uses your `<h2>` and `<h3>` tags to understand what subtopics the page covers. A flat page with no headings is a wall of text that AI cannot navigate.

6. **JSON-LD structured data.** This is the machine-readable layer. FAQPage schema, HowTo schema, Product schema — these tell AI systems exactly what type of content they are reading.

### Content Quality Signals

- **E-E-A-T**: Experience, Expertise, Authoritativeness, Trustworthiness.
  - Show first-hand experience (case studies, real examples, specific details).
  - Demonstrate expertise (author bios, credentials, depth of coverage).
  - Build authority (consistent publishing, topic coverage breadth).
  - Establish trust (accurate data, citations, transparent about limitations).

- **Depth over breadth.** A thorough page on one topic outperforms a shallow page covering ten topics. AI systems prefer authoritative single-topic sources.

- **Freshness signals.** Published dates, last-updated dates, and current information. AI systems deprioritize stale content.

### Structural Patterns That Score

**FAQ Section:**
```html
<section>
  <h2>Frequently Asked Questions</h2>
  <h3>What does the service include?</h3>
  <p>The service includes X, Y, and Z. Sessions run 60 minutes...</p>
  <h3>How much does it cost?</h3>
  <p>Pricing starts at $45 per session...</p>
</section>
```
Pair this with `FAQPage` JSON-LD schema.

**Comparison Table:**
```html
<table>
  <thead>
    <tr><th>Feature</th><th>Plan A</th><th>Plan B</th></tr>
  </thead>
  <tbody>
    <tr><td>Sessions per month</td><td>4</td><td>8</td></tr>
    <tr><td>Price</td><td>$120/mo</td><td>$200/mo</td></tr>
  </tbody>
</table>
```

**Definition/Summary Block:**
```html
<h2>What is [Topic]</h2>
<p><strong>[Topic]</strong> is [clear one-sentence definition].
   It works by [brief mechanism]. Common use cases include [2-3 examples].</p>
```

### Anti-Patterns for AI Search

- **Duplicate titles across pages.** AI cannot distinguish pages with the same title.
- **Missing meta descriptions.** AI may generate its own summary, which you cannot control.
- **Relative image URLs in OG tags.** Sharing previews break completely.
- **JSON-LD data that does not match page content.** This is treated as deception.
- **Vague, qualitative-only content.** "We provide excellent service" gives AI nothing to cite.
- **Keyword stuffing.** AI systems detect and deprioritize unnatural keyword density.
- **Thin pages.** Pages with minimal content that exist only to target a keyword. AI skips these.
- **Hidden content.** Content in collapsed accordions or behind tabs may be indexed but is deprioritized for AI citation.

---

## Pre-Ship Metadata Checklist

1. Does the page have a unique, descriptive `<title>` under 60 characters?
2. Does it have a compelling `<meta name="description">` under 155 characters?
3. Is the `<link rel="canonical">` set to the correct absolute URL?
4. Is `<html lang="...">` set correctly?
5. Are OG tags present with absolute image URLs?
6. Are Twitter Card tags present?
7. Is there a favicon (both .ico and .svg)?
8. Is `<meta name="theme-color">` set?
9. Is there exactly one `<h1>`, and does heading hierarchy flow correctly?
10. Does JSON-LD structured data match the visible page content?
11. Do all content images have meaningful alt text?
12. For content pages: is there an FAQ section with clear Q&A format?
13. For content pages: are specific details (numbers, prices, dates) present instead of vague claims?
