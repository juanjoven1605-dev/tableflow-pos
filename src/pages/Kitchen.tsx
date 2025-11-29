import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Check } from "lucide-react";

const orders = [
  {
    id: 1,
    orderNumber: "ORD-142",
    table: "Table 5",
    time: "5 mins ago",
    items: [
      { name: "Classic Burger", qty: 2, notes: "No pickles" },
      { name: "French Fries", qty: 2 },
      { name: "Caesar Salad", qty: 1, notes: "Extra dressing" },
    ],
    status: "pending",
  },
  {
    id: 2,
    orderNumber: "ORD-143",
    table: "Table 12",
    time: "3 mins ago",
    items: [
      { name: "Margherita Pizza", qty: 1 },
      { name: "Iced Coffee", qty: 2 },
    ],
    status: "preparing",
  },
  {
    id: 3,
    orderNumber: "ORD-144",
    table: "Takeout",
    time: "2 mins ago",
    items: [
      { name: "Pasta Carbonara", qty: 1 },
      { name: "Chicken Wings", qty: 1, notes: "Extra spicy" },
    ],
    status: "preparing",
  },
  {
    id: 4,
    orderNumber: "ORD-145",
    table: "Table 3",
    time: "Just now",
    items: [
      { name: "Classic Burger", qty: 3 },
      { name: "French Fries", qty: 3 },
      { name: "Chocolate Cake", qty: 2 },
    ],
    status: "pending",
  },
];

export default function Kitchen() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Kitchen Display</h1>
        <p className="text-muted-foreground">Active orders and preparation status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {orders.map((order) => (
          <Card
            key={order.id}
            className={`shadow-card ${
              order.status === "pending"
                ? "border-warning"
                : "border-primary"
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {order.orderNumber}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{order.table}</p>
                </div>
                <Badge
                  variant={order.status === "pending" ? "secondary" : "default"}
                  className={
                    order.status === "pending"
                      ? "bg-warning/20 text-warning"
                      : "bg-primary/20 text-primary"
                  }
                >
                  {order.status === "pending" ? "New" : "In Progress"}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                <Clock className="w-4 h-4" />
                <span>{order.time}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-muted/50 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">
                        {item.name}
                      </span>
                      <Badge variant="outline">×{item.qty}</Badge>
                    </div>
                    {item.notes && (
                      <p className="text-sm text-warning font-medium">
                        Note: {item.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                {order.status === "pending" ? (
                  <Button className="flex-1 touch-target bg-primary hover:bg-primary/90">
                    Start Preparing
                  </Button>
                ) : (
                  <Button className="flex-1 touch-target bg-success hover:bg-success/90 text-success-foreground">
                    <Check className="w-4 h-4 mr-2" />
                    Mark Ready
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
