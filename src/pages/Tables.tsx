import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const tables = [
  { id: 1, seats: 4, status: "available" },
  { id: 2, seats: 2, status: "occupied", guests: 2, order: "$45.00" },
  { id: 3, seats: 6, status: "occupied", guests: 5, order: "$128.50" },
  { id: 4, seats: 4, status: "reserved" },
  { id: 5, seats: 2, status: "occupied", guests: 2, order: "$52.00" },
  { id: 6, seats: 4, status: "available" },
  { id: 7, seats: 8, status: "available" },
  { id: 8, seats: 2, status: "available" },
  { id: 9, seats: 4, status: "occupied", guests: 3, order: "$67.00" },
  { id: 10, seats: 6, status: "reserved" },
  { id: 11, seats: 4, status: "available" },
  { id: 12, seats: 2, status: "occupied", guests: 1, order: "$38.00" },
];

export default function Tables() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Table Management</h1>
          <p className="text-muted-foreground">Floor plan overview and table status</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-success"></div>
            <span className="text-sm font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary"></div>
            <span className="text-sm font-medium">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent"></div>
            <span className="text-sm font-medium">Reserved</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {tables.map((table) => (
          <Card
            key={table.id}
            className={`cursor-pointer card-hover touch-target transition-all ${
              table.status === "occupied"
                ? "border-primary shadow-card"
                : table.status === "reserved"
                ? "border-accent shadow-card"
                : "border-border hover:border-success"
            }`}
          >
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    table.status === "available"
                      ? "default"
                      : table.status === "occupied"
                      ? "default"
                      : "secondary"
                  }
                  className={
                    table.status === "available"
                      ? "bg-success text-success-foreground"
                      : table.status === "occupied"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }
                >
                  {table.status}
                </Badge>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Users className="w-3 h-3" />
                  <span>{table.seats}</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-foreground">
                Table {table.id}
              </div>

              {table.status === "occupied" && (
                <div className="space-y-1 pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {table.guests} guests
                  </p>
                  <p className="text-lg font-bold text-primary">{table.order}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
