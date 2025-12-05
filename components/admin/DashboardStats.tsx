import Card from "@/components/ui/Card";

interface Stat {
  label: string;
  value: string;
}

const DashboardStats = ({ stats }: { stats: Stat[] }) => (
  <div className="grid gap-4 md:grid-cols-4">
    {stats.map((stat) => (
      <Card key={stat.label}>
        <p className="text-sm text-foreground/70">{stat.label}</p>
        <p className="text-2xl font-semibold">{stat.value}</p>
      </Card>
    ))}
  </div>
);

export default DashboardStats;
