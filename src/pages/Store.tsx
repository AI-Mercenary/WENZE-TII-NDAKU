import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Star, MapPin, Phone, Mail, Store as StoreIcon } from "lucide-react";
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

const Store = () => {
  const { storeId } = useParams();
  const { t } = useTranslation();

  // Sample store data
  const store = {
    id: storeId || "1",
    name: "AfriBeauty Store",
    description: "Premium African beauty products made with natural ingredients",
    rating: 4.8,
    reviewCount: 156,
    totalProducts: 89,
    joinedDate: "2022",
    location: "Lagos, Nigeria",
    phone: "+234 123 456 7890",
    email: "contact@afribeauty.com",
    banner: "/placeholder.svg"
  };

  // Sample products from this store
  const products = [
    {
      id: "1",
      name: "Premium African Shea Butter Face Cream",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviewCount: 127,
      image: "/placeholder.svg",
      vendor: store.name,
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
      vendor: store.name,
    },
    // Add more products...
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Store Banner */}
        <section className="relative h-64 bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="relative z-10 text-white">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mr-6">
                  <StoreIcon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{store.name}</h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{store.rating}</span>
                      <span className="ml-1">({store.reviewCount} reviews)</span>
                    </div>
                    <span>•</span>
                    <span>{store.totalProducts} products</span>
                    <span>•</span>
                    <span>Since {store.joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Store Info Sidebar */}
            <aside className="lg:w-1/4">
              <div className="bg-card p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-semibold text-lg mb-4">Store Information</h3>
                <p className="text-muted-foreground mb-4">{store.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{store.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>{store.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span>{store.email}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button className="w-full" variant="secondary">
                    <Mail className="h-4 w-4 mr-2" />
                    Message Vendor
                  </Button>
                  <Button variant="outline" className="w-full">
                    Follow Store
                  </Button>
                </div>
              </div>

              {/* Store Stats */}
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Store Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Products</span>
                    <span className="font-medium">{store.totalProducts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Rating</span>
                    <span className="font-medium">{store.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews</span>
                    <span className="font-medium">{store.reviewCount}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Store Products */}
            <div className="lg:w-3/4">
              {/* Search and Sort */}
              <div className="bg-card p-6 rounded-lg shadow-sm mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        type="text"
                        placeholder={`${t('search')} in ${store.name}...`}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="md:w-48">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('sortBy')} />
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
                </div>
              </div>

              {/* Promoted Products */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Star className="h-6 w-6 text-secondary mr-2" />
                  Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.filter(p => p.isFeatured).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>

              {/* All Products */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <span className="text-muted-foreground">
                    Showing {products.length} of {store.totalProducts} products
                  </span>
                </div>
                
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Store;