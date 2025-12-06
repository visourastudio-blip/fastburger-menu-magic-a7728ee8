import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import MenuItemCard from "@/components/MenuItemCard";
import CartDrawer from "@/components/CartDrawer";
import RestaurantInfo from "@/components/RestaurantInfo";
import Watermark from "@/components/Watermark";
import { menuItems, categories } from "@/data/menuData";
import { CartProvider } from "@/contexts/CartContext";

const MenuContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("lanches");

  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    } else {
      items = items.filter((item) => item.category === activeCategory);
    }

    return items;
  }, [searchQuery, activeCategory]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-4 pb-32 space-y-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {!searchQuery && (
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        )}

        <section>
          {!searchQuery && (
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 animate-fade-in">
              <span>{currentCategory?.icon}</span>
              <span>{currentCategory?.name}</span>
            </h2>
          )}

          {searchQuery && filteredItems.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground text-lg">
                Nenhum item encontrado para "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))}
            </div>
          )}
        </section>
      </main>

      <RestaurantInfo />
      <CartDrawer />
      <Watermark />
    </div>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <MenuContent />
    </CartProvider>
  );
};

export default Index;
