import { StatCard } from "@/components/StatCard";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Revenue"
          value="$2,847"
          icon={DollarSign}
          trend="+12.5% from yesterday"
          trendUp={true}
        />
        <StatCard
          title="Orders"
          value="64"
          icon={ShoppingCart}
          trend="+8% from yesterday"
          trendUp={true}
        />
        <StatCard
          title="Active Tables"
          value="12/20"
          icon={Users}
        />
        <StatCard
          title="Avg Order Value"
          value="$44.48"
          icon={TrendingUp}
          trend="+3.2% from yesterday"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { table: "Table 5", items: 3, total: "$52.00", status: "Preparing" },
                { table: "Table 12", items: 2, total: "$38.00", status: "Ready" },
                { table: "Table 3", items: 5, total: "$87.50", status: "Served" },
                { table: "Takeout #142", items: 2, total: "$28.00", status: "Pickup" },
              ].map((order, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{order.table}</p>
                    <p className="text-sm text-muted-foreground">{order.items} items</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold text-foreground">{order.total}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      order.status === "Ready" ? "bg-success/20 text-success" :
                      order.status === "Preparing" ? "bg-warning/20 text-warning" :
                      order.status === "Served" ? "bg-muted text-muted-foreground" :
                      "bg-accent/20 text-accent"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Top Selling Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Classic Burger", sold: 24, revenue: "$288" },
                { name: "Caesar Salad", sold: 18, revenue: "$216" },
                { name: "Margherita Pizza", sold: 16, revenue: "$240" },
                { name: "Pasta Carbonara", sold: 14, revenue: "$196" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.sold} orders</p>
                  </div>
                  <p className="font-bold text-primary">{item.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
