"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import { useToast } from "@/hooks/useToast";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: true },
  });
  const { addToast } = useToast();

  const onSubmit = async (data: ContactInput) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      addToast({ title: "Thanks for reaching out", description: "We'll respond within one working day", variant: "success" });
      reset();
    } else {
      addToast({ title: "Something went wrong", description: "Please try again", variant: "error" });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" requiredIndicator {...register("name")} error={formState.errors.name?.message} />
      <Input label="Email" type="email" requiredIndicator {...register("email")} error={formState.errors.email?.message} />
      <Input label="Phone" requiredIndicator {...register("phone")} error={formState.errors.phone?.message} />
      <Textarea label="Message" requiredIndicator {...register("message")} error={formState.errors.message?.message} />
      <Checkbox label="I agree to be contacted" {...register("consent")} />
      {formState.errors.consent && <p className="text-sm text-error">{formState.errors.consent.message}</p>}
      <Button type="submit" loading={formState.isSubmitting}>
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
