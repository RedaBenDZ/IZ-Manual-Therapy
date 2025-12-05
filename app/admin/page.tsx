import Card from "@/components/ui/Card";

export default function AdminDashboard() {
  const stats = [
    { label: "Today", value: "0" },
    { label: "This week", value: "0" },
    { label: "Revenue", value: "£0" },
    { label: "Notifications", value: "0" },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-foreground/70">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <p className="text-foreground/80">Booking and notification summaries will appear here once data is available.</p>
      </Card>
    </div>
  );
}
