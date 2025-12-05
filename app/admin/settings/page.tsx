import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <form className="space-y-3">
        <Input label="Notification email" type="email" />
        <Input label="Change password" type="password" />
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  );
}
