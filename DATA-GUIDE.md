# Rupmilan Jewellers - Website Data Guide

This document explains how to update all the content on the website. Most content is driven by **JSON data files** and **local images**. The About page content is in component files. No coding knowledge is needed to update products, categories, or any content.

---

## Quick Overview

| What to change | File to edit | Image folder |
|---|---|---|
| Products | `src/data/products.json` | `public/images/products/` |
| Categories | `src/data/categories.json` | `public/images/categories/` |
| Collections | `src/data/collections.json` | `public/images/collections/` |
| Hero Slider | `src/data/hero-slides.json` | `public/images/` |
| Stats (numbers) | `src/data/stats.json` | - |
| Customer Reviews | `src/data/testimonials.json` | - |
| About Page | `src/components/about/*.tsx` (see Section 7) | `public/images/about/` |

---

## 1. Products (`src/data/products.json`)

This is the **main file** that powers the Catalogue page, Bestsellers, Trending, and Product Detail pages.

### How to add a new product

Copy this template and add it to the array in `products.json`:

```json
{
  "id": "product-33",
  "name": "Your Product Name",
  "category": "Necklace",
  "tagNumber": "#108",
  "image": "/images/products/your-image.jpg",
  "badge": "Bestseller",
  "collection": "bridal",
  "slug": "your-product-name",
  "metalType": "gold",
  "carat": "22K",
  "weight": "25.5g",
  "occasion": ["wedding", "festive"],
  "gender": "women",
  "jewelleryType": "necklace",
  "description": "A short description of the product.",
  "images": [
    "/images/products/your-image.jpg",
    "/images/products/your-image-2.jpg",
    "/images/products/your-image-3.jpg"
  ],
  "sku": "RM-NK-007",
  "sortOrder": 33,
  "dateAdded": "2025-03-20",
  "tags": ["bestseller", "bridal"]
}
```

### Field explanation

| Field | Required | What it does | Allowed values |
|---|---|---|---|
| `id` | Yes | Unique identifier | Any unique text like `"product-33"` |
| `name` | Yes | Product name shown on card | Any text |
| `category` | Yes | Category label on card | `"Necklace"`, `"Earrings"`, `"Ring"`, `"Bangle"`, `"Chain"`, `"Mangalsutra"`, etc. |
| `tagNumber` | Yes | Unique tag number (shown on card) | Must start with `#`, e.g. `"#108"`. **Must be unique!** |
| `image` | Yes | Main product image | Path starting with `/images/products/` |
| `badge` | No | Special tag shown on card | `"Bestseller"`, `"New"`, `"Trending"`, or remove the line to show no badge |
| `collection` | No | Which collection it belongs to | `"bridal"`, `"daily-wear"`, `"festive"`, `"heritage"`, `"diamond"` |
| `slug` | Yes | URL-friendly name (lowercase, hyphens) | e.g. `"royal-heritage-necklace"` |
| `metalType` | Yes | Metal type (shown as badge on card) | `"gold"`, `"silver"`, `"diamond"` |
| `carat` | No | Gold carat | `"18K"`, `"20K"`, `"22K"`, `"23K"`, `"24K"` |
| `weight` | No | Weight of the product | e.g. `"25.5g"` |
| `occasion` | No | When to wear | Array: `"wedding"`, `"festive"`, `"daily-wear"`, `"engagement"`, `"gifting"` |
| `gender` | No | Target gender | `"women"`, `"men"`, `"unisex"` |
| `jewelleryType` | Yes | Type (used for URL routing) | `"necklace"`, `"earring"`, `"ring"`, `"bangle"`, `"chain"`, `"mangalsutra"`, `"pendant"`, `"bracelet"` |
| `description` | No | Detailed description for product page | Any text |
| `images` | Yes | All product images (for gallery on product page) | Array of image paths |
| `sku` | No | SKU code | e.g. `"RM-NK-007"` |
| `sortOrder` | No | Display order (lower = first) | Any number |
| `dateAdded` | No | Date added (for "Newest" sort) | Format: `"YYYY-MM-DD"` |
| `tags` | No | Extra tags for filtering | Array of lowercase tags |

### Important rules for products

- **`tagNumber` must be unique** across all products
- **`slug` must be unique** and URL-friendly (lowercase, use hyphens instead of spaces)
- **`id` must be unique** (use format `"product-1"`, `"product-2"`, etc.)
- Products with `badge: "Bestseller"` appear in the **Bestsellers** section on homepage
- Products with `badge: "Trending"` appear in the **Trending Now** section on homepage
- Products with `badge: "New"` get a green "New" ribbon on catalogue cards

### How to add product images

1. Put your images in the `public/images/products/` folder
2. Name them clearly, e.g.: `necklace-7.jpg`, `necklace-7-2.jpg`, `necklace-7-3.jpg`
3. Use the path `/images/products/necklace-7.jpg` in the JSON (no `public` in the path)
4. Recommended: **Square or 3:4 ratio** images, minimum **600x800px**
5. For best results, use images with a **white or clean background**

### How to remove a product

Simply delete the entire `{ ... }` block for that product from the array. Make sure no trailing comma is left.

---

## 2. Categories (`src/data/categories.json`)

Controls the **"Shop by Categories"** section on homepage and catalogue category pages.

### Example entry

```json
{
  "id": "cat-1",
  "name": "Necklaces",
  "image": "/images/categories/necklaces.jpg",
  "productCount": 120,
  "slug": "necklaces"
}
```

### Field explanation

| Field | What it does |
|---|---|
| `id` | Unique identifier (e.g. `"cat-9"`) |
| `name` | Category name displayed on website |
| `image` | Category image (circular on homepage) |
| `productCount` | Number shown as "120+ Designs" |
| `slug` | URL slug - used for `/catalogue/necklaces` URL. **Must be lowercase, use hyphens** |

### Images

- Put in: `public/images/categories/`
- Recommended: **Square images** (they show as circles on homepage)

---

## 3. Collections (`src/data/collections.json`)

Controls the **"Rupmilan Collections"** section on homepage.

### Example entry

```json
{
  "id": "bridal",
  "name": "Bridal Collection",
  "description": "Exquisite pieces for your most special day",
  "image": "/images/collections/bridal.jpg",
  "productCount": 45
}
```

### Field explanation

| Field | What it does |
|---|---|
| `id` | Unique identifier. Should match `collection` field in products.json |
| `name` | Collection name displayed |
| `description` | Short description shown below name |
| `image` | Collection cover image |
| `productCount` | Number shown as "45 Designs" |

### Images

- Put in: `public/images/collections/`
- Recommended: **Landscape images (4:3 ratio)**, minimum **800x600px**

---

## 4. Hero Slider (`src/data/hero-slides.json`)

Controls the **banner/slider** at the top of the homepage.

### Example entry

```json
{
  "id": "slide-1",
  "title": "Timeless Elegance",
  "subtitle": "Discover BIS Hallmarked jewellery crafted with generations of expertise since 1988",
  "ctaText": "Explore Collection",
  "ctaLink": "#collections",
  "image": "/images/slide-1.jpg"
}
```

### Field explanation

| Field | What it does |
|---|---|
| `id` | Unique identifier |
| `title` | Large heading text on slide |
| `subtitle` | Description text below heading |
| `ctaText` | Button text (e.g. "Explore Collection") |
| `ctaLink` | Where button goes when clicked. Use `#collections`, `#categories`, `/catalogue`, `/contact` etc. |
| `image` | Background image for the slide |

### Images

- Put in: `public/images/`
- Recommended: **Wide landscape 16:9 images** (Gemini AI output size 1376x768 works perfectly). Jewellery should sit on the RIGHT side, left side plain fabric for text.
- Slides auto-rotate every 5 seconds

---

## 5. Stats / Numbers (`src/data/stats.json`)

Controls the **animated number cards** on homepage (e.g., "38+ Years", "10,000+ Families").

### Example entry

```json
{
  "id": "stat-1",
  "label": "38+ Years",
  "value": 38,
  "suffix": "+",
  "image": "/images/stats/customers.jpg",
  "emoji": "🏆",
  "description": "Of trusted jewellery craftsmanship and customer relationships"
}
```

### Field explanation

| Field | What it does |
|---|---|
| `value` | The number that animates (counts from 0 to this) |
| `suffix` | Text after number (`"+"`, `"%"`, etc.) |
| `emoji` | Emoji icon shown above the number |
| `description` | Text shown below the number |

### To change a stat

Just update the `value`, `suffix`, `emoji`, or `description`. The animation happens automatically.

---

## 6. Customer Reviews (`src/data/testimonials.json`)

Controls the **auto-scrolling reviews** section on homepage.

### Example entry

```json
{
  "id": "test-1",
  "name": "Priya Sharma",
  "location": "Champa",
  "text": "Beautiful designs and genuine hallmarked gold. Our family has trusted Rupmilan for three generations.",
  "rating": 5
}
```

### Field explanation

| Field | What it does |
|---|---|
| `id` | Unique identifier (e.g. `"test-11"`) |
| `name` | Customer name |
| `location` | City name |
| `text` | Review text (keep it 1-3 sentences for best display) |
| `rating` | Star rating: `4` or `5` |

---

## 7. About Page (Component Files)

The About page content is **not** in JSON files — it is directly inside component files. To update text or images, open the file mentioned below and change the text you see in quotes.

> **Note:** Unlike JSON files, these are code files (`.tsx`). Be careful to only change text inside quotes (`"..."`) and image paths. Do not remove any code syntax like `<`, `>`, `{`, `}`, `className`, etc.

### 7a. Hero Banner

**File:** `src/components/about/AboutHero.tsx`

| What to change | What to look for in the file |
|---|---|
| Hero background image | `src="/images/about/hero.jpg"` — replace with your new image path |
| Tagline text | `Since 1988 · Sarafa Bazar, Champa, Chhattisgarh` |
| Main heading | `Three Generations of Trust & Gold` |
| Subheading | `A family legacy built on craftsmanship, purity...` |

**Image:** Put hero image in `public/images/about/`. Recommended: **Wide landscape (16:9)**, minimum **1400 x 800 px**.

---

### 7b. Our Story + Founder

**File:** `src/components/about/StorySection.tsx`

| What to change | What to look for in the file |
|---|---|
| Story heading | `A legacy of trust & craftsmanship` |
| Story paragraph | `What began as a small workshop in Sarafa Bazar...` (the long paragraph) |
| Founder name | `Late Shri Sharda Prasad Bitawan Sao` |
| Founder title | `Founder · Rupmilan Jewellers · Est. 1988` |
| Founder quote | `Jewellery is not just gold and silver...` |
| Founder image | `src="/images/about/founder.jpg"` — replace with new image path |

**Image:** Put founder photo in `public/images/about/`. Recommended: **Portrait (3:4)**, minimum **320 x 370 px**.

---

### 7c. Timeline / Our Journey

**File:** `src/components/about/JourneyTimeline.tsx`

The timeline is powered by a `milestones` array at the top of the file. Each entry has:

```
{ year: "1988", title: "Founded in Champa", description: "Late Shri Sharda Prasad..." }
```

| Field | What it does |
|---|---|
| `year` | Year label shown on the timeline (e.g. `"1988"`, `"Today"`) |
| `title` | Milestone heading |
| `description` | Short description of the milestone |

**To add a new milestone:** Copy an existing `{ year: "...", title: "...", description: "..." }` block, add a comma after the previous one, and fill in your new content.

**To remove a milestone:** Delete the entire `{ ... }` block and make sure no trailing comma is left.

**Current milestones:** 1988, Late 1990s, Early 2000s, 2020, Today

---

### 7d. Showroom Gallery (Carousel)

**File:** `src/components/about/ShowroomGallery.tsx`

The gallery is powered by a `galleryImages` array at the top of the file:

```
{ src: "/images/about/showroom-1.jpg", alt: "Rupmilan Jewellers Showroom Interior" }
```

| Field | What it does |
|---|---|
| `src` | Image path (must start with `/images/about/`) |
| `alt` | Description of the image (for accessibility) |

**To add a new showroom image:**
1. Put the image in `public/images/about/`
2. Add a new entry: `{ src: "/images/about/showroom-4.jpg", alt: "Your description" }`

**Images:** Recommended: **Wide landscape (16:9)**, minimum **1200 x 675 px**.

The gallery auto-rotates every 4 seconds and has navigation arrows and dot indicators.

---

### 7e. Why Choose Us

**File:** `src/components/about/WhyChooseUs.tsx`

The cards are in a `reasons` array. To change the text on a card, find and update the `label` value:

```
{ icon: Shield, label: "Trusted for over 3 decades" }
```

**Current cards:** Trusted for over 3 decades, Certified and authentic jewellery, Personalized customer experience, Designs for every occasion

> **Note:** Do not change the `icon:` part — those are code references to icon components.

---

### 7f. What We Offer

**File:** `src/components/about/OfferingsSection.tsx`

Same format as Why Choose Us. Update the `label` text in the `offerings` array:

```
{ icon: Gem, label: "18K, 20K & 22K Gold Jewellery" }
```

**Current offerings:** 18K/20K/22K Gold Jewellery, 24K Gold Coins, Diamond Jewellery, 925 Sterling Silver, Customised Designs, Personalised Pieces

---

### 7g. Our Craftsmanship

**File:** `src/components/about/CraftsmanshipSection.tsx`

Update `title` and `description` in the `craftsmanshipPoints` array:

```
{ icon: Fingerprint, title: "Handcrafted Excellence", description: "Each piece is thoughtfully created..." }
```

---

### 7h. Our Promise

**File:** `src/components/about/OurPromise.tsx`

| What to change | What to look for in the file |
|---|---|
| Main quote | `Jewellery is more than an accessory...` |
| Quote attribution | `Rupmilan Jewellers · Since 1988` |
| Certification heading | `BIS Hallmark Certified · 100% Purity Guaranteed` |
| Certification text | `Every piece at Rupmilan Jewellers carries the Bureau of Indian Standards Hallmark...` |

---

## Image Guidelines

### Where to put images

All images go inside the `public/` folder:

```
public/
  images/
    products/      <- Product images
    categories/    <- Category circle images
    collections/   <- Collection cover images
    hero/          <- Homepage slider images
    about/         <- About page images (hero, founder, showroom)
```

### Image naming rules

- Use **lowercase** names
- Use **hyphens** instead of spaces: `gold-necklace.jpg` (not `Gold Necklace.jpg`)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- **In JSON, write paths starting with `/images/...`** (don't include `public/`)

### Recommended image sizes

| Type | Ratio | Minimum size |
|---|---|---|
| Product | 3:4 (portrait) | 600 x 800 px |
| Category | 1:1 (square) | 400 x 400 px |
| Collection | 4:3 (landscape) | 800 x 600 px |
| Hero Slider | 16:9 (wide) | 1376 x 768 px |
| About Hero | 16:9 (wide) | 1400 x 800 px |
| Founder Photo | 3:4 (portrait) | 320 x 370 px |
| Showroom Photos | 16:9 (wide) | 1200 x 675 px |

### Image tips

- Use **white or clean background** for product photos (the website uses `mix-blend-mode: multiply` which makes white backgrounds transparent)
- **Compress images** before uploading to keep the site fast (use tinypng.com or squoosh.app)
- Keep product images under **200KB** each for best performance

---

## How to Apply Changes

After editing any JSON file or adding images:

1. Save the file
2. If running locally: the dev server auto-refreshes
3. If deploying: push to GitHub and Vercel will auto-deploy

---

## WhatsApp Number

The WhatsApp enquiry number is set in: `src/lib/whatsapp.ts`

```
const WHATSAPP_PHONE = "919232000436";
```

To change it, update this number (include country code, no `+` sign).

---

## Phone Numbers

Phone numbers appear in:
- **Footer** (`src/components/layout/Footer.tsx`) - lines with `tel:+91...`
- **Welcome Hero "Call Now" button** (`src/components/home/WelcomeHero.tsx`) - `tel:+919826540190`
- **Contact page** (`src/components/InfoSection.tsx`)

Current numbers:
- Call: **9826540190** / **9926514690**
- WhatsApp: **9232000436**

---

## Common Tasks

### Add a new product to the website
1. Add product images to `public/images/products/`
2. Add a new entry in `src/data/products.json` (copy an existing one and modify)
3. Make sure `tagNumber`, `id`, and `slug` are all unique

### Change the homepage slider
1. Add new slide images to `public/images/`
2. Edit `src/data/hero-slides.json` - change titles, subtitles, or images

### Add a new category
1. Add category image to `public/images/categories/`
2. Add entry in `src/data/categories.json`
3. Products with matching `jewelleryType` will automatically show in that category page

### Update customer reviews
1. Edit `src/data/testimonials.json`
2. Add, remove, or modify reviews

### Change the stats numbers
1. Edit `src/data/stats.json`
2. Change `value` for the animated number, `description` for the text below

### Update About page content
1. Find the right file in `src/components/about/` (see Section 7 above)
2. Change only the text inside quotes — do not touch code syntax
3. For images, put new images in `public/images/about/` and update the path in the file

### Add a new timeline milestone
1. Open `src/components/about/JourneyTimeline.tsx`
2. Find the `milestones` array at the top
3. Add a new `{ year: "...", title: "...", description: "..." }` entry

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Image not showing | Check the path starts with `/images/...` (no `public/` prefix) |
| Product not appearing | Make sure `id`, `tagNumber`, and `slug` are unique |
| Website shows error after editing JSON | Check for missing commas, extra commas, or unclosed quotes in the JSON file |
| Category page shows 0 products | Make sure product's `jewelleryType` matches the category `slug` (singular vs plural) |
| About page text not updating | Make sure you only changed text inside quotes. Check for missing quotes or brackets |
| About page image not showing | Check path starts with `/images/about/...` and the file exists in `public/images/about/` |

### JSON Validation

Before saving, validate your JSON at: https://jsonlint.com/ - paste your file content to check for errors.

---

*Last updated: March 2026*
