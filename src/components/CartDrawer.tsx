import { useState } from "react";
import { ShoppingCart, Minus, Plus, Trash2, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const CartDrawer = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleWhatsAppOrder = () => {
    if (!customerName.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome para continuar.",
        variant: "destructive",
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de enviar o pedido.",
        variant: "destructive",
      });
      return;
    }

    const orderItems = items
      .map((item) => `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}`)
      .join("\n");

    const message = encodeURIComponent(
      `🍔 *PEDIDO FASTBURGER*\n\n` +
      `👤 *Cliente:* ${customerName}\n\n` +
      `📋 *Itens:*\n${orderItems}\n\n` +
      `💰 *Total:* ${formatPrice(totalPrice)}\n\n` +
      `Aguardo confirmação! 🙏`
    );

    const whatsappNumber = "5511940895563";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Pedido enviado!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    clearCart();
    setCustomerName("");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="cart"
          size="lg"
          className="fixed bottom-20 right-4 z-50 rounded-full shadow-glow animate-pulse-glow h-14 w-14 md:w-auto md:px-6"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden md:inline">Carrinho</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce-subtle">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md bg-background border-border flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-foreground flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <ShoppingCart className="h-16 w-16 mb-4 opacity-30" />
            <p>Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-3 py-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-card rounded-lg animate-fade-in"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-secondary font-bold text-sm">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-bold text-foreground w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Total:</span>
                <span className="text-2xl font-extrabold text-secondary">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Input
                placeholder="Seu nome"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="bg-card border-border"
              />

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={handleWhatsAppOrder}
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Pedido
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
