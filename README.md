# Rupmilan Jewellers

Premium jewellery website for **Rupmilan Jewellers**, Champa, Chhattisgarh. Trusted since 1988.

**Live:** [rupmilan-jewellers.vercel.app](https://rupmilan-jewellers.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Data:** Frontend-driven (JSON + local images)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, stats, collections, categories, bestsellers, trending, new launches, gold/silver products, reviews |
| Catalogue | `/catalogue` | Product grid with filters, sort, infinite scroll |
| Category | `/catalogue/[category]` | Category-filtered listing (e.g., `/catalogue/necklaces`) |
| Product Detail | `/[type]/[slug]/[tag]` | Image gallery, details, WhatsApp enquiry, similar products |
| About Us | `/about` | Hero, founder, timeline, offerings, craftsmanship, showroom gallery |
| Contact | `/contact` | Info, map, badges, WhatsApp support |

## Features

- Mobile-first responsive design
- Warm ivory/gold light theme
- Product filters: metal type, carat, jewellery type, subcategory, occasion
- Sort: popular, newest, carat, weight, name
- Infinite scroll on catalogue
- Image gallery with lightbox and desktop magnifier on PDP
- WhatsApp "Ask Price" integration on all product cards
- Animated stats counters
- Auto-scrolling customer reviews
- BIS Hallmark certification highlights

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  app/                    # Next.js pages (App Router)
  components/
    about/                # About Us page sections
    catalogue/            # Catalogue filters, cards, grid
    home/                 # Homepage sections
    layout/               # Navbar, Footer, MobileBottomNav
    pdp/                  # Product detail page components
    product/              # ProductCard, CategoryCard, ViewMoreCard
    ui/                   # ScrollReveal, HorizontalScroll, SearchBar
  data/                   # JSON data files
    products.json         # All products
    categories.json       # Category definitions
    subcategories.json    # Subcategory filter options
    collections.json      # Collection cards
    hero-slides.json      # Homepage slider
    stats.json            # Animated number cards
    testimonials.json     # Customer reviews
  hooks/                  # useInfiniteScroll, useFilters
  lib/                    # products.ts, whatsapp.ts
  types/                  # TypeScript interfaces
public/
  images/
    products/             # Product photos
    categories/           # Category circle images
    collections/          # Collection cover images
    hero/                 # Homepage slider banners
    about/                # About page images
```

## Data Management

All content is controlled via JSON files in `src/data/`. See **Rupmilan-Jewellers-Data-Guide.docx** for complete documentation on updating products, images, and content.

## Contact

- **Phone:** 9826540190 / 9926514690
- **WhatsApp:** 9232000436
- **Email:** rupmilanjewellers@gmail.com
- **Address:** Near Samleshwari Mandir, Sarafa Bazar, Champa, CG 495671
