import Checkbox from "@/components/ui/Checkbox";

interface ConsentFormProps {
  consent: boolean;
  privacyConsent: boolean;
  onChange: (field: "consent" | "privacyConsent", value: boolean) => void;
}

const ConsentForm: React.FC<ConsentFormProps> = ({ consent, privacyConsent, onChange }) => (
  <div className="space-y-3">
    <Checkbox
      label="I consent to treatment and understand the therapist will assess suitability on arrival."
      checked={consent}
      onChange={(e) => onChange("consent", e.currentTarget.checked)}
    />
    <Checkbox
      label="I agree to the privacy policy and handling of my data."
      checked={privacyConsent}
      onChange={(e) => onChange("privacyConsent", e.currentTarget.checked)}
    />
  </div>
);

export default ConsentForm;
