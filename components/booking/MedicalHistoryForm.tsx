import Checkbox from "@/components/ui/Checkbox";
import Textarea from "@/components/ui/Textarea";
import type { MedicalHistory } from "@/types";

const commonConditions = ["Asthma", "Heart conditions", "Recent surgery", "Pregnancy", "Diabetes"];

interface MedicalHistoryFormProps {
  history: Partial<MedicalHistory>;
  onChange: (field: keyof MedicalHistory, value: string | string[]) => void;
}

const MedicalHistoryForm: React.FC<MedicalHistoryFormProps> = ({ history, onChange }) => {
  const conditions = history.conditions ?? [];
  const toggleCondition = (condition: string) => {
    if (conditions.includes(condition)) {
      onChange("conditions", conditions.filter((item) => item !== condition));
    } else {
      onChange("conditions", [...conditions, condition]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-2 md:grid-cols-2">
        {commonConditions.map((condition) => (
          <Checkbox
            key={condition}
            label={condition}
            checked={conditions.includes(condition)}
            onChange={() => toggleCondition(condition)}
          />
        ))}
      </div>
      <Textarea
        label="Medications"
        value={history.medications ?? ""}
        onChange={(e) => onChange("medications", e.target.value)}
      />
      <Textarea
        label="Allergies"
        value={history.allergies ?? ""}
        onChange={(e) => onChange("allergies", e.target.value)}
      />
      <Textarea
        label="Injuries"
        value={history.injuries ?? ""}
        onChange={(e) => onChange("injuries", e.target.value)}
      />
    </div>
  );
};

export default MedicalHistoryForm;
