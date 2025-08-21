import { useTranslation } from "react-i18next";
import { 
  Sparkles, 
  Smartphone, 
  Shirt, 
  Baby, 
  UtensilsCrossed, 
  Coffee,
  Heart,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-marketplace.jpg";

const Index = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t('cosmetics'), icon: Sparkles, href: '/category/cosmetics' },
    { name: t('tech'), icon: Smartphone, href: '/category/tech' },
    { name: t('clothes'), icon: Shirt, href: '/category/clothes' },
    { name: t('toys'), icon: Baby, href: '/category/toys' },
    { name: t('food'), icon: UtensilsCrossed, href: '/category/food' },
    { name: t('beverages'), icon: Coffee, href: '/category/beverages' },
    { name: t('paraPharmacy'), icon: Heart, href: '/category/para-pharmacy' },
  ];

  // Sample featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Premium African Shea Butter Face Cream",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviewCount: 127,
      image: "/placeholder.svg",
      vendor: "AfriBeauty Store",
      isNew: true,
      isFeatured: true,
    },
    {
      id: "2", 
      name: "Samsung Galaxy Smartphone Case",
      price: 19.99,
      rating: 4.6,
      reviewCount: 89,
      image: "/placeholder.svg",
      vendor: "TechHub Africa",
      isFeatured: true,
    },
    {
      id: "3",
      name: "Traditional African Print Dress",
      price: 45.00,
      originalPrice: 60.00,
      rating: 4.9,
      reviewCount: 156,
      image: "/placeholder.svg",
      vendor: "Heritage Fashion",
      isNew: true,
    },
    {
      id: "4",
      name: "Organic Ethiopian Coffee Beans",
      price: 18.50,
      rating: 4.7,
      reviewCount: 203,
      image: "/placeholder.svg",
      vendor: "Mountain Coffee Co",
      isFeatured: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
          <div 
            className="relative h-[600px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {t('heroTitle')}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {t('heroSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    {t('shopNow')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                    {t('exploreStores')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('featuredCategories')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover amazing products across our diverse marketplace categories
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  name={category.name}
                  icon={category.icon}
                  href={category.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {t('featuredProducts')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  Handpicked products from our best vendors
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                {t('viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center mt-8 md:hidden">
              <Button variant="outline">
                {t('viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-xl opacity-90">Active Vendors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-xl opacity-90">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25,000+</div>
                <div className="text-xl opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Promoted Stores */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('promotedStores')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover trusted vendors with excellent ratings and quality products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "AfriBeauty Store", rating: 4.9, products: 156, image: "/placeholder.svg" },
                { name: "TechHub Africa", rating: 4.8, products: 289, image: "/placeholder.svg" },
                { name: "Heritage Fashion", rating: 4.9, products: 124, image: "/placeholder.svg" },
              ].map((store, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-primary">{store.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{store.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm ml-1">{store.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{store.products} products</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Visit Store
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
