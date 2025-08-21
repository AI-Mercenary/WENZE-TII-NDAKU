import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  href: string;
  description?: string;
}

export function CategoryCard({ name, icon: Icon, href, description }: CategoryCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:bg-card-hover">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}