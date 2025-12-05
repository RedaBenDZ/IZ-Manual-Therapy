import Button from "@/components/ui/Button";

const ExportButton = ({ href, label }: { href: string; label: string }) => (
  <Button asChild variant="secondary">
    <a href={href}>{label}</a>
  </Button>
);

export default ExportButton;
