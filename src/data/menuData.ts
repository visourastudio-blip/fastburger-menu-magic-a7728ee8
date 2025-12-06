import fastClassic from "@/assets/fast-classic.jpg";
import baconMaster from "@/assets/bacon-master.jpg";
import goldenChicken from "@/assets/golden-chicken.jpg";
import bigFast from "@/assets/big-fast.jpg";
import queijoTurbo from "@/assets/queijo-turbo.jpg";
import royalFast from "@/assets/royal-fast.jpg";
import drinks from "@/assets/drinks.jpg";
import brownie from "@/assets/brownie.jpg";
import sorvete from "@/assets/sorvete.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "lanches" | "bebidas" | "sobremesas";
}

export const menuItems: MenuItem[] = [
  // Lanches
  {
    id: "fast-classic",
    name: "Fast Classic",
    description: "Hambúrguer artesanal 150g, queijo cheddar, alface, tomate, cebola e molho especial",
    price: 24.90,
    image: fastClassic,
    category: "lanches",
  },
  {
    id: "bacon-master",
    name: "Bacon Master",
    description: "Hambúrguer artesanal 180g, bacon crocante, queijo cheddar derretido, alface e maionese defumada",
    price: 29.90,
    image: baconMaster,
    category: "lanches",
  },
  {
    id: "golden-chicken",
    name: "Golden Chicken",
    description: "Filé de frango empanado crocante, queijo muçarela, alface e maionese especial",
    price: 26.90,
    image: goldenChicken,
    category: "lanches",
  },
  {
    id: "big-fast",
    name: "Big Fast",
    description: "Duplo hambúrguer artesanal 300g, duplo cheddar, picles, cebola caramelizada e molho secreto",
    price: 36.90,
    image: bigFast,
    category: "lanches",
  },
  {
    id: "queijo-turbo",
    name: "Queijo Turbo",
    description: "Hambúrguer 180g com triplo queijo: cheddar, muçarela e prato derretidos",
    price: 31.90,
    image: queijoTurbo,
    category: "lanches",
  },
  {
    id: "royal-fast",
    name: "Royal Fast",
    description: "Hambúrguer gourmet 200g, cebola caramelizada, rúcula fresca, queijo brie e molho de ervas",
    price: 38.90,
    image: royalFast,
    category: "lanches",
  },
  // Bebidas
  {
    id: "guarana",
    name: "Guaraná",
    description: "Guaraná Antarctica gelado 350ml",
    price: 6.90,
    image: drinks,
    category: "bebidas",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Coca-Cola original gelada 350ml",
    price: 7.90,
    image: drinks,
    category: "bebidas",
  },
  {
    id: "suco-uva",
    name: "Suco de Uva",
    description: "Suco natural de uva integral 300ml",
    price: 8.90,
    image: drinks,
    category: "bebidas",
  },
  {
    id: "suco-laranja",
    name: "Suco de Laranja",
    description: "Suco natural de laranja espremido na hora 300ml",
    price: 9.90,
    image: drinks,
    category: "bebidas",
  },
  {
    id: "suco-morango",
    name: "Suco de Morango",
    description: "Suco natural de morango cremoso 300ml",
    price: 10.90,
    image: drinks,
    category: "bebidas",
  },
  {
    id: "suco-abacaxi",
    name: "Suco de Abacaxi",
    description: "Suco natural de abacaxi refrescante 300ml",
    price: 9.90,
    image: drinks,
    category: "bebidas",
  },
  // Sobremesas
  {
    id: "brownie",
    name: "Brownie",
    description: "Brownie de chocolate belga com calda quente e sorvete de creme",
    price: 16.90,
    image: brownie,
    category: "sobremesas",
  },
  {
    id: "sorvete",
    name: "Sorvete",
    description: "Sorvete artesanal com calda de chocolate, chantilly e granulado",
    price: 14.90,
    image: sorvete,
    category: "sobremesas",
  },
];

export const categories = [
  { id: "lanches", name: "Lanches", icon: "🍔" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
  { id: "sobremesas", name: "Sobremesas", icon: "🍨" },
] as const;
