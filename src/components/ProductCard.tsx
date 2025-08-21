import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  vendor: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  vendor,
  isNew = false,
  isFeatured = false,
}: ProductCardProps) {
  const { t } = useTranslation();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added product ${id} to cart`);
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          {!imageError ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{name}</p>
              </div>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-success text-success-foreground text-xs px-2 py-1 rounded-md font-medium">
              New
            </span>
          )}
          {isFeatured && (
            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          onClick={handleWishlistToggle}
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Vendor */}
        <p className="text-xs text-muted-foreground mb-1">{vendor}</p>

        {/* Product Name */}
        <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-xs text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          variant="marketplace"
          size="sm"
          className="w-full"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {t('addToCart')}
        </Button>
      </CardContent>
    </Card>
  );
}