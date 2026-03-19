import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import DecorativeOrbs from "@/components/layout/DecorativeOrbs";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGallery from "@/components/pdp/ProductGallery";
import ProductInfo from "@/components/pdp/ProductInfo";
import SimilarProducts from "@/components/pdp/SimilarProducts";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAllProducts, getProductBySlugAndTag, getSimilarProducts } from "@/lib/products";

interface PDPPageProps {
  params: Promise<{ category: string; slug: string; tag: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({
    category: p.jewelleryType,
    slug: p.slug,
    tag: p.tagNumber.replace("#", ""),
  }));
}

export async function generateMetadata({ params }: PDPPageProps): Promise<Metadata> {
  const { slug, tag } = await params;
  const product = getProductBySlugAndTag(slug, `#${tag}`);
  if (!product) {
    return { title: "Product Not Found | Rupmilan Jewellers" };
  }
  return {
    title: `${product.name} | Rupmilan Jewellers`,
    description: product.description || `Explore ${product.name} - ${product.category} in ${product.metalType} from Rupmilan Jewellers.`,
    openGraph: {
      title: `${product.name} | Rupmilan Jewellers`,
      description: product.description || `${product.name} - Premium handcrafted jewellery`,
    },
  };
}

export default async function PDPPage({ params }: PDPPageProps) {
  const { category, slug, tag } = await params;
  const product = getProductBySlugAndTag(slug, `#${tag}`);

  if (!product) notFound();

  const similar = getSimilarProducts(product, 8);

  return (
    <>
      <Navbar />
      <DecorativeOrbs />

      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="flex items-center gap-1.5 text-xs font-sans text-white/40 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
              <Link href="/" className="flex items-center gap-1 hover:text-gold-400 transition-colors flex-shrink-0">
                <Home className="w-3 h-3" />
                Home
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <Link href="/catalogue" className="hover:text-gold-400 transition-colors flex-shrink-0">
                Catalogue
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <Link
                href={`/catalogue/${category}`}
                className="hover:text-gold-400 transition-colors capitalize flex-shrink-0"
              >
                {category.replace(/-/g, " ")}
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-white/60 truncate">{product.name}</span>
            </nav>
          </ScrollReveal>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal>
              <ProductGallery images={product.images} name={product.name} />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ProductInfo product={product} />
            </ScrollReveal>
          </div>

          {/* Similar Products */}
          <SimilarProducts products={similar} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}
