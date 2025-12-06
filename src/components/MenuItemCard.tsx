import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div
      className={cn(
        "bg-card rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:scale-[1.02] animate-slide-up",
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-36 md:h-44 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>
      
      <div className="p-3 md:p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-foreground text-base md:text-lg leading-tight">
            {item.name}
          </h3>
          <span className="text-secondary font-extrabold text-base md:text-lg whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-end pt-2">
          {quantity === 0 ? (
            <Button
              variant="default"
              size="sm"
              onClick={() => addItem(item)}
              className="animate-scale-in"
            >
              <Plus className="h-4 w-4 mr-1" />
              Adicionar
            </Button>
          ) : (
            <div className="flex items-center gap-2 animate-scale-in">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => updateQuantity(item.id, quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-bold text-foreground w-6 text-center">
                {quantity}
              </span>
              <Button
                variant="default"
                size="icon-sm"
                onClick={() => addItem(item)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
