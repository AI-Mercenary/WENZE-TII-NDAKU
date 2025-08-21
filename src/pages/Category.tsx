import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, SlidersHorizontal, Grid3X3, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Category = () => {
  const { categoryName } = useParams();
  const { t } = useTranslation();

  // Sample products for the category
  const products = [
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
      name: "Organic Face Moisturizer",
      price: 19.99,
      rating: 4.6,
      reviewCount: 89,
      image: "/placeholder.svg",
      vendor: "Natural Beauty Co",
      isFeatured: true,
    },
    // Add more sample products...
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary to-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize">
                {categoryName ? categoryName.replace('-', ' ') : t('categories')}
              </h1>
              <p className="text-xl opacity-90">
                Discover amazing products in this category
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-primary" />
                  {t('filter')}
                </h3>
                
                {/* Search within category */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder={t('search')}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Sort Options */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">{t('sortBy')}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="new">New Arrivals</SelectItem>
                      <SelectItem value="alpha">Alphabetical</SelectItem>
                      <SelectItem value="alpha-reverse">Reverse Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">{t('price')} Range</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min" />
                    <Input type="number" placeholder="Max" />
                  </div>
                </div>

                {/* Subcategories */}
                <div>
                  <label className="block text-sm font-medium mb-2">Subcategories</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Face Care</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Body Care</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Hair Care</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Products Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">
                    Showing {products.length} products
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;