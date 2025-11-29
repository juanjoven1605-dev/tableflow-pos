import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = [
  { id: 1, name: "Classic Burger", price: 12.99, category: "Mains", image: "🍔" },
  { id: 2, name: "Caesar Salad", price: 9.99, category: "Salads", image: "🥗" },
  { id: 3, name: "Margherita Pizza", price: 14.99, category: "Mains", image: "🍕" },
  { id: 4, name: "Pasta Carbonara", price: 13.99, category: "Mains", image: "🍝" },
  { id: 5, name: "French Fries", price: 4.99, category: "Sides", image: "🍟" },
  { id: 6, name: "Chicken Wings", price: 11.99, category: "Appetizers", image: "🍗" },
  { id: 7, name: "Chocolate Cake", price: 6.99, category: "Desserts", image: "🍰" },
  { id: 8, name: "Iced Coffee", price: 4.50, category: "Beverages", image: "☕" },
];

const categories = ["All", "Mains", "Appetizers", "Salads", "Sides", "Desserts", "Beverages"];

export default function Orders() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const cartItems = menuItems.filter(item => cart[item.id]);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * cart[item.id], 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">New Order</h1>
        <p className="text-muted-foreground">Select items to add to the order</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="w-full flex flex-wrap h-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="flex-1 touch-target">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="shadow-card card-hover cursor-pointer" onClick={() => addToCart(item.id)}>
                <CardContent className="p-4 text-center space-y-3">
                  <div className="text-5xl">{item.image}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <Badge variant="secondary" className="mt-1">{item.category}</Badge>
                  </div>
                  <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                  {cart[item.id] && (
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(item.id);
                        }}
                        className="touch-target"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-bold text-lg w-8 text-center">{cart[item.id]}</span>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item.id);
                        }}
                        className="touch-target"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="shadow-card sticky top-24">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Current Order</h2>
              </div>

              {cartItems.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No items added yet</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)} × {cart[item.id]}
                        </p>
                      </div>
                      <p className="font-bold text-primary">
                        ${(item.price * cart[item.id]).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {cartItems.length > 0 && (
                <>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (10%)</span>
                      <span className="font-medium">${(cartTotal * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                      <span>Total</span>
                      <span className="text-primary">${(cartTotal * 1.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full touch-target gradient-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                    Complete Order
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
