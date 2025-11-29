import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const staff = [
  { id: 1, name: "John Smith", role: "Manager", status: "active", shift: "Morning" },
  { id: 2, name: "Sarah Johnson", role: "Server", status: "active", shift: "Morning" },
  { id: 3, name: "Mike Davis", role: "Chef", status: "active", shift: "Morning" },
  { id: 4, name: "Emily Brown", role: "Server", status: "break", shift: "Morning" },
  { id: 5, name: "Chris Wilson", role: "Kitchen Staff", status: "active", shift: "Morning" },
  { id: 6, name: "Lisa Anderson", role: "Cashier", status: "active", shift: "Morning" },
];

export default function Staff() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Staff Management</h1>
          <p className="text-muted-foreground">Manage team members and roles</p>
        </div>
        <Button className="touch-target gradient-primary text-primary-foreground">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
          <Card key={member.id} className="shadow-card card-hover">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <Badge
                  variant={member.status === "active" ? "default" : "secondary"}
                  className={
                    member.status === "active"
                      ? "bg-success/20 text-success"
                      : "bg-warning/20 text-warning"
                  }
                >
                  {member.status === "active" ? "Active" : "On Break"}
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline">{member.shift} Shift</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
