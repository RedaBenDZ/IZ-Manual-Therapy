import Button from "@/components/ui/Button";

interface ReturningClientCheckProps {
  onConfirm: (changed: boolean) => void;
}

const ReturningClientCheck: React.FC<ReturningClientCheckProps> = ({ onConfirm }) => (
  <div className="flex gap-3">
    <Button variant="secondary" onClick={() => onConfirm(false)}>
      No changes
    </Button>
    <Button onClick={() => onConfirm(true)}>Medical history changed</Button>
  </div>
);

export default ReturningClientCheck;
