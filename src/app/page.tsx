import BlogsList from '@/components/BlogsList';
import CategoryList from '@/components/CategoryList';
import CTA from '@/components/CTA';
import Features from '@/components/Feature';
import Hero from '@/components/Hero';
import NewestProducts from '@/components/NewestProducts';
import ProductsTools from '@/components/ProductsTools';

export default async function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-lg mt-12">
      <Hero />
      <Features />
      <NewestProducts />
      <CTA />
      <CategoryList />
      <ProductsTools />
      <BlogsList />
    </div>
  );
}
